import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, signInAnonymously } from "firebase/auth";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  connectFirestoreEmulator
} from "firebase/firestore";

const value = (name) => import.meta.env[name] || "";
const firebaseConfig = {
  apiKey: value("VITE_FIREBASE_API_KEY"),
  authDomain: value("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: value("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: value("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: value("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: value("VITE_FIREBASE_APP_ID")
};

export const firebaseConfigured = Object.values(firebaseConfig).every((item) => item && item !== "replace-me");
export let auth = null;
export let db = null;

export async function initializeFirebase() {
  if (!firebaseConfigured) return { configured: false };
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
  });
  if (import.meta.env.VITE_USE_FIREBASE_EMULATOR === "true") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
    connectFirestoreEmulator(db, "127.0.0.1", 8080);
  }
  if (!auth.currentUser) await signInAnonymously(auth);
  return { configured: true, uid: auth.currentUser.uid };
}
