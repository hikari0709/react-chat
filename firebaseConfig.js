import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from "firebase/database";

const {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_DOMAIN,
  REACT_APP_FIREBASE_DATABASE,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const pushMessage = ({ name, text }) => {
  push(ref(db, 'messages/'), {
    name: name,
    text: text,
  });
}
