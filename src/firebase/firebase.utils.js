import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDd5MQyl0wBjJoPNHGLaPsJ4pDSK8ukaHw",
  authDomain: "react-ecommerce-3f438.firebaseapp.com",
  databaseURL: "https://react-ecommerce-3f438.firebaseio.com",
  projectId: "react-ecommerce-3f438",
  storageBucket: "react-ecommerce-3f438.appspot.com",
  messagingSenderId: "361083278764",
  appId: "1:361083278764:web:8e79c229be2f089f955609",
  measurementId: "G-VXHQSEHNG4",
};

// initialize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// trigger google popup
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
