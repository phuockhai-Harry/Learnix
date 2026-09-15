import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import { doc, getDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

export interface ClassGroup {
  id: string;
  name: string;
  studentEmails: string[];
}

export interface UserProfile {
  role: 'student' | 'teacher';
  realName: string;
  codeName?: string;
  email?: string;
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
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  registerProfile: (role: 'student' | 'teacher', realName: string, codeName: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribeSnapshot: () => void;
    
    const unsubscribeAuth = onAuthStateChanged(auth, async (currUser) => {
      setUser(currUser);
      if (currUser) {
        try {
          const docRef = doc(db, 'users', currUser.uid);
          unsubscribeSnapshot = onSnapshot(docRef, async (docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data() as UserProfile;
              // Auto-heal missing email for older accounts
              if (!userData.email && currUser.email) {
                try {
                  const { updateDoc } = await import('firebase/firestore');
                  await updateDoc(docRef, { email: currUser.email });
                  userData.email = currUser.email;
                } catch (e) {
                  console.error("Failed to auto-heal email", e);
                }
              }
              setProfile(userData);
            } else {
              setProfile(null); // Needs to register
            }
          }, (error) => {
            console.error("Error fetching user profile snapshot:", error);
          });
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${currUser.uid}`);
        }
      } else {
        setProfile(null);
        if (unsubscribeSnapshot) unsubscribeSnapshot();
      }
      setLoading(false);
    });
    
    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const registerProfile = async (role: 'student' | 'teacher', realName: string, codeName: string) => {
    if (!user) throw new Error("No user authenticated");
    const data: any = {
      role,
      realName,
      email: user.email,
      createdAt: serverTimestamp(),
    };
    if (codeName) {
      data.codeName = codeName;
    }
    try {
      await setDoc(doc(db, 'users', user.uid), data);
      setProfile({ role, realName, codeName, email: user.email || undefined });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `users/${user.uid}`);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, logout, registerProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
