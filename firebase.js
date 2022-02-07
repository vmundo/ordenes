
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
  import { getFirestore,collection , addDoc, getDocs, getDoc, deleteDoc, updateDoc, onSnapshot, doc  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBmRYVItXEtACGVBFBK0ZzyAIgfhNFTEOc",
    authDomain: "hydraforce-4df55.firebaseapp.com",
    projectId: "hydraforce-4df55",
    storageBucket: "hydraforce-4df55.appspot.com",
    messagingSenderId: "279837180042",
    appId: "1:279837180042:web:1025bab50c65395aaaed73"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore()

export const saveTask = (title, description) => {
    addDoc(collection(db, "ordenes"),{title, description})
};
 export const getTasks = () => getDocs(collection(db, "ordenes"))

 export const onGetTasks = (callback) => onSnapshot(collection(db,"ordenes"),callback)

 export const deleteTask = (id) => deleteDoc(doc(db,"ordenes",id));

 export const getTask = (id) => getDoc(doc(db,"ordenes",id));

 export const updateTask = (id, newFields) => updateDoc(doc(db,"ordenes",id),newFields);