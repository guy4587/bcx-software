import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCOUOHW-I4gZIaaWmFJqYK81nhssGUU7Rg",
  authDomain: "techtobcx.firebaseapp.com",
  projectId: "techtobcx",
  storageBucket: "techtobcx.appspot.com",
  messagingSenderId: "134970300812",
  appId: "1:134970300812:web:b97c20ea6239753a001ea9",
  measurementId: "G-M1K516Y7WV",
});

export const auth = app.auth();
export default app
