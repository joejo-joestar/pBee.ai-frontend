import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN-iS7aboVnWNT9kEOOopuT7iGx1vMNbE",
  authDomain: "pbee-6cc16.firebaseapp.com",
  projectId: "pbee-6cc16",
  storageBucket: "pbee-6cc16.appspot.com",
  messagingSenderId: "577835059617",
  appId: "1:577835059617:web:1d3b554c12f08194ac23e0",
  measurementId: "G-1D93PVZ58V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);