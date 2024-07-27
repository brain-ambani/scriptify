import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { get } from "http";

const firebaseConfig = {
  apiKey: "AIzaSyDYfq34lC1CbRsLuGUjTzxlx_k-M9DeJy8",
  authDomain: "scriptify-a1eb4.firebaseapp.com",
  projectId: "scriptify-a1eb4",
  storageBucket: "scriptify-a1eb4.appspot.com",
  messagingSenderId: "479255226397",
  appId: "1:479255226397:web:efb69a65110bc568173ef4",
  measurementId: "G-9YTWJD5XNL",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
