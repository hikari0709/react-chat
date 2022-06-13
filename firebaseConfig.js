import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3Lr4Srs28RPs08HlkQH-4GU3LwVsf00E",
  authDomain: "chat-demo-e71cd.firebaseapp.com",
  databaseURL: "https://chat-demo-e71cd-default-rtdb.firebaseio.com",
  projectId: "chat-demo-e71cd",
  storageBucket: "chat-demo-e71cd.appspot.com",
  messagingSenderId: "307783850994",
  appId: "1:307783850994:web:153d7bf1d2fd73c375696b",
  measurementId: "G-JYCTDVVF6Q"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const pushMessage = ({ name, text }) => {
  push(ref(db, 'messages/'), {
    name: name,
    text: text,
  });
}
