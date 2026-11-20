
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDp9LBP5kiGVZZMvMlHgQvhKvqAHM7rvjM",
  authDomain: "sadik-play.firebaseapp.com",
  projectId: "sadik-play",
  storageBucket: "sadik-play.firebasestorage.app",
  messagingSenderId: "792037388006",
  appId: "1:792037388006:web:7c20dc06ecee4f21881527",
  measurementId: "G-X66DQM0RZT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
