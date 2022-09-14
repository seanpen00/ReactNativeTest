import logo from './logo.svg';
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfuBZ_lr7xYg5qFGiB-yGfgH7lFH7AUQ",
  authDomain: "test-app-a81a2.firebaseapp.com",
  projectId: "test-app-a81a2",
  storageBucket: "test-app-a81a2.appspot.com",
  messagingSenderId: "716202630133",
  appId: "1:716202630133:web:3903ae92694a6cc5435ebc",
  measurementId: "G-XFZ87BYR96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


function tryData() {
  try {
    const docRef = addDoc(collection(db, "asdf"), {
      first: "Sean",
      last: "Pen",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function getData() {
  try {
    const querySnapshot = getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  catch (e) {
    console.error("Bruh.", e);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={tryData}>
          asdf
        </button>
        <button onClick={getData}>
          get data
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
