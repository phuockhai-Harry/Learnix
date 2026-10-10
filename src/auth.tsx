import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  onAuthStateChanged, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth';
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

export const ADMIN_EMAIL = 'phuockhaihhqt@gmail.com';

export const isAdminEmail = (email?: string | null): boolean => {
  if (!email) return false;
  return email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
};

export interface ClassGroup {
  id: string;
  name: string;
  studentEmails: string[];
}

export interface UserProfile {
  role: 'student' | 'teacher' | 'admin';
  realName: string;
  codeName?: string;
  email?: string;
  grade?: number;
  streakCount?: number;
  lastActiveDate?: string;
  earnedBadges?: string[];
  xp?: number;
  studentEmails?: string[]; // Legacy, kept for backwards compatibility
  classes?: ClassGroup[];
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  resendVerification: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  registerProfile: (role: 'student' | 'teacher' | 'admin', realName: string, codeName: string, grade?: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot: () => void;
    let initialLoadTimeout: any;
    
    const unsubscribeAuth = onAuthStateChanged(auth, async (currUser) => {
      // Firebase Auth Only: if user exists but email is not verified, do not auto-login and NEVER touch Firestore/DB
      if (currUser && !currUser.emailVerified) {
        try {
          await signOut(auth);
        } catch {
          // ignore signout errors
        }
        setUser(null);
        setProfile(null);
        setLoading(false);
        return;
      }

      setUser(currUser);
      if (currUser) {
        const isUserAdmin = isAdminEmail(currUser.email);

        // Fallback safety timeout so loading never hangs
        initialLoadTimeout = setTimeout(() => {
          setLoading(false);
        }, 3000);

        try {
          const docRef = doc(db, 'users', currUser.uid);
          unsubscribeSnapshot = onSnapshot(docRef, async (docSnap) => {
            clearTimeout(initialLoadTimeout);
            if (docSnap.exists()) {
              const userData = docSnap.data() as UserProfile;
              let needsUpdate = false;
              const updatePayload: Record<string, any> = {};

              // Auto-heal missing email for accounts
              if (!userData.email && currUser.email) {
                userData.email = currUser.email;
                updatePayload.email = currUser.email;
                needsUpdate = true;
              }

              // Elevate admin if email matches phuockhaihhqt@gmail.com
              if (isUserAdmin && userData.role !== 'admin') {
                userData.role = 'admin';
                updatePayload.role = 'admin';
                needsUpdate = true;
              }

              if (needsUpdate) {
                try {
                  const { updateDoc } = await import('firebase/firestore');
                  await updateDoc(docRef, updatePayload);
                } catch (e) {
                  console.error("Failed to update admin/email info in Firestore:", e);
                }
              }

              setProfile(userData);
            } else {
              // If user is the designated admin, auto-create their profile immediately
              if (isUserAdmin) {
                const autoAdminProfile: UserProfile = {
                  role: 'admin',
                  realName: currUser.displayName || 'Admin Phước Khải',
                  email: currUser.email || ADMIN_EMAIL,
                };
                try {
                  await setDoc(docRef, {
                    ...autoAdminProfile,
                    createdAt: serverTimestamp(),
                  });
                  setProfile(autoAdminProfile);
                } catch (e) {
                  console.error("Failed to auto-create admin doc:", e);
                  setProfile(autoAdminProfile);
                }
              } else {
                setProfile(null); // Needs to register
              }
            }
            setLoading(false);
          }, (error) => {
            clearTimeout(initialLoadTimeout);
            console.error("Error fetching user profile snapshot:", error);
            setLoading(false);
          });
        } catch (error) {
          clearTimeout(initialLoadTimeout);
          handleFirestoreError(error, OperationType.GET, `users/${currUser.uid}`);
          setLoading(false);
        }
      } else {
        setProfile(null);
        if (unsubscribeSnapshot) unsubscribeSnapshot();
        setLoading(false);
      }
    });
    
    return () => {
      clearTimeout(initialLoadTimeout);
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (
        error?.code === 'auth/popup-closed-by-user' ||
        error?.code === 'auth/cancelled-popup-request' ||
        error?.message?.includes('auth/popup-closed-by-user') ||
        error?.message?.includes('auth/cancelled-popup-request')
      ) {
        // User closed or dismissed the sign-in popup window; treat as normal cancellation
        console.info('Google sign-in popup was dismissed by the user.');
        return;
      }
      throw error;
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
    // If email is not verified on Login -> block + sign out immediately
    if (!userCredential.user.emailVerified) {
      await signOut(auth);
      const error: any = new Error('EMAIL_NOT_VERIFIED');
      error.code = 'auth/email-not-verified';
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    // Send verification email
    try {
      await sendEmailVerification(userCredential.user);
    } catch (e) {
      console.warn("Failed to dispatch verification email:", e);
    }
    // Don't auto-login after Sign Up
    await signOut(auth);
  };

  const resendVerification = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
    await sendEmailVerification(userCredential.user);
    await signOut(auth);
  };

  const sendPasswordReset = async (email: string) => {
    await sendPasswordResetEmail(auth, email.trim());
  };

  const logout = async () => {
    await signOut(auth);
  };

  const registerProfile = async (role: 'student' | 'teacher' | 'admin', realName: string, codeName: string, grade?: number) => {
    if (!user) throw new Error("No user authenticated");
    const effectiveRole = isAdminEmail(user.email) ? 'admin' : role;
    const data: any = {
      role: effectiveRole,
      realName,
      email: user.email,
      createdAt: serverTimestamp(),
    };
    if (codeName && effectiveRole === 'student') {
      data.codeName = codeName;
    }
    if (grade && effectiveRole === 'student') {
      data.grade = grade;
    }
    try {
      await setDoc(doc(db, 'users', user.uid), data);
      setProfile({ role: effectiveRole, realName, codeName, email: user.email || undefined, grade });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}`);
    }
  };

  const isAdmin = profile?.role === 'admin' || isAdminEmail(user?.email);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        isAdmin,
        signInWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        sendPasswordReset,
        resendVerification,
        logout,
        registerProfile
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
