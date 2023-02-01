// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

import {getStorage, ref, uploadBytes} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN1JcTno-ng8fbdTXvNk3fOmqMmiFumSM",
  authDomain: "nrd-care.firebaseapp.com",
  projectId: "nrd-care",
  storageBucket: "nrd-care.appspot.com",
  messagingSenderId: "461829195113",
  appId: "1:461829195113:web:9af419e17747ea841c29f8",
  measurementId: "G-5E4813CX93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

const storage = getStorage(app);

// collection ref
const colRef = collection(db, 'users')

// get collection data
getDocs(colRef).then(
  (snapshot) => {
    let users = []

    snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id })
    })
    console.log('users collection', users)
  })
  .catch(error => {
    console.log(error.message)
  })

export { auth, app, db, storage };

//get a single document
const docRef = doc(db, 'users', 'socNV5QrmFN3UgJCKScy')

getDoc(docRef).then((doc) => {
  console.log(doc.data(), doc.id)
})

// Storage
// export async function upload(file, currentUser, setLoading) {
//   const fileRef = ref(storage, currentUser.uid + '.png');

//   setLoading(true);
//   const snapshot = await uploadBytes(fileRef, file);
//   setLoading(false);
//   alert("Uploaded file!");
// }