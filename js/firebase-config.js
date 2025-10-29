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

// Collection reference
const tournamentsCollection = db.collection("tournaments");

console.log("✅ Firebase initialized");
