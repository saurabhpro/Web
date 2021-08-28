import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHh5xUBO-mPgYj2QVgMiPB7D1fAdypCBA',
  authDomain: 'todo-items-svelte-v1.firebaseapp.com',
  projectId: 'todo-items-svelte-v1',
  storageBucket: 'todo-items-svelte-v1.appspot.com',
  messagingSenderId: '330287382776',
  appId: '1:330287382776:web:dcc5d4f049fbe4f845bb0d',
  measurementId: 'G-R8X0SQ4RZQ',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
