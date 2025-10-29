#!/bin/bash

echo "🏆 Football Tournament Manager - Firebase Setup"
echo "================================================"
echo ""

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
else
    echo "✅ Firebase CLI is installed"
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Login to Firebase:"
echo "   firebase login"
echo ""
echo "2. Create a new Firebase project at:"
echo "   https://console.firebase.google.com/"
echo ""
echo "3. Initialize Firebase in this directory:"
echo "   firebase init"
echo "   - Select: Hosting and Firestore"
echo "   - Choose: Use existing project"
echo "   - Public directory: . (current directory)"
echo ""
echo "4. Update Firebase config in js/firebase-config.js"
echo "   - Get your config from Firebase Console > Project Settings > Web App"
echo ""
echo "5. Enable Firestore Database:"
echo "   - Go to Firebase Console > Build > Firestore Database"
echo "   - Click 'Create Database'"
echo "   - Choose 'Start in test mode'"
echo ""
echo "6. Deploy to Firebase Hosting:"
echo "   firebase deploy"
echo ""
echo "================================================"
echo "✨ Your app will be live at: https://YOUR_PROJECT_ID.firebaseapp.com"
