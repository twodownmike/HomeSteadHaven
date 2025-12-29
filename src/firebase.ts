import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { GameSaveData } from './types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDDjfbJ4uO_xrI6aqOtcuq5RRBjmhwf1h8',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'homesteading-haven.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'homesteading-haven',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'homesteading-haven.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '702634367242',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:702634367242:web:2b70a2b308ccf3686802f3',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-BBLXXNW0Y8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<UserCredential> => {
  provider.setCustomParameters({ prompt: 'select_account' });
  return signInWithPopup(auth, provider);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const saveGameData = async (uid: string, data: GameSaveData) => {
  await setDoc(doc(db, 'saves', uid), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

export const loadGameData = async (uid: string): Promise<GameSaveData | null> => {
  const snap = await getDoc(doc(db, 'saves', uid));
  if (!snap.exists()) return null;
  const saved = snap.data();
  const { updatedAt, ...rest } = saved;
  return rest as GameSaveData;
};
