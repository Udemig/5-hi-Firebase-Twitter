// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjRJVRV1F3ddqYTtCLUJpeOeoudBbcSoQ',
  authDomain: 'hi-twitter-7ed8a.firebaseapp.com',
  projectId: 'hi-twitter-7ed8a',
  storageBucket: 'hi-twitter-7ed8a.appspot.com',
  messagingSenderId: '310418794946',
  appId: '1:310418794946:web:94bc53e7de207ecab38e5b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! yetkilendirme kurulumu
export const auth = getAuth(app);

// google sağlayıcısı kurulum
export const provider = new GoogleAuthProvider();

// veritabanının referansını alama
export const db = getFirestore(app);

// medya'ları depolayıcğımız yer
export const storage = getStorage(app);
