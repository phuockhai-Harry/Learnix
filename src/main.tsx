import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'katex/dist/katex.min.css';

// Prevent Firebase Auth popup dismissal & benign Vite HMR websocket drops from surfacing as uncaught runtime errors
window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason;
  const code = reason?.code || '';
  const message = typeof reason?.message === 'string' ? reason.message : String(reason || '');
  if (
    code === 'auth/popup-closed-by-user' ||
    code === 'auth/cancelled-popup-request' ||
    message.includes('auth/popup-closed-by-user') ||
    message.includes('auth/cancelled-popup-request') ||
    message.includes('WebSocket closed without opened') ||
    message.includes('WebSocket') ||
    message.includes('@vite/client')
  ) {
    event.preventDefault();
    console.info('Suppressed non-fatal auth/websocket event.');
  }
});

window.addEventListener('error', (event) => {
  const message = typeof event?.message === 'string' ? event.message : '';
  if (
    message.includes('WebSocket closed without opened') ||
    message.includes('WebSocket') ||
    message.includes('@vite/client')
  ) {
    event.preventDefault();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
