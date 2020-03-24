import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANNe7OlMbA4CtEHCz72jWQKwpNg4Dlnss",
  authDomain: "tenny-store.firebaseapp.com",
  databaseURL: "https://tenny-store.firebaseio.com",
  projectId: "tenny-store",
  storageBucket: "tenny-store.appspot.com",
  messagingSenderId: "173687480493",
  appId: "1:173687480493:web:0eed07e0d5d90ddacd2624",
  measurementId: "G-4WSG0RY0LJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating the user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
