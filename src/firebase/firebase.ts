//firebase的初始設定
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import {
  getFirestore
} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCMYU0nxMnE04lY-lnbCMIP748QjflX670",
  authDomain: "project-8473944886150809622.firebaseapp.com",
  projectId: "project-8473944886150809622",
  storageBucket: "project-8473944886150809622.firebasestorage.app",
  messagingSenderId: "488919806861",
  appId: "1:488919806861:web:b2032939f034e52e81c3c4",
  measurementId: "G-N5W8RYT63J"
};
// 初始化 Firebase
export const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)  

