// Firebase Configuration
// To get your config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Click on "Web" icon to add a web app
// 4. Copy the firebaseConfig object here

const firebaseConfig = {
  apiKey: "AIzaSyAgjDE5i_mWnz2sI3R2LY0nvav3Kzohl1g",
  authDomain: "football-tournament-12d9e.firebaseapp.com",
  projectId: "football-tournament-12d9e",
  storageBucket: "football-tournament-12d9e.firebasestorage.app",
  messagingSenderId: "358266925197",
  appId: "1:358266925197:web:0c8bfc556f4ef8dfcc32c4",
  measurementId: "G-138SS2NGPM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence()
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
    } else if (err.code == 'unimplemented') {
      console.log("The current browser does not support all of the features required to enable persistence");
    }
  });

// Collection reference
const tournamentsCollection = db.collection("tournaments");

console.log("✅ Firebase initialized");
