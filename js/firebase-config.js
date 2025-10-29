// Firebase Configuration
// To get your config:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Click on "Web" icon to add a web app
// 4. Copy the firebaseConfig object here

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Collection reference
const tournamentsCollection = db.collection('tournaments');

console.log('✅ Firebase initialized');
