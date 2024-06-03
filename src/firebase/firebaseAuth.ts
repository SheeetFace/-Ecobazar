
import { initializeApp } from "firebase/app";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const API_KEY = import.meta.env.VITE_API_KEY_AUTH;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN_AUTH;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID_AUTH;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET_AUTH;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID_AUTH;
const APP_ID= import.meta.env.VITE_APP_ID_AUTH;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};


export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
// export const githubAuthProvider = new GithubAuthProvider();