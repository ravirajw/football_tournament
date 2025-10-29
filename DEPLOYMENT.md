# 🚀 Deployment Guide - Football Tournament Manager

## Quick Start (5 minutes)

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Enter project name: `football-tournament` (or any name)
4. Disable Google Analytics (optional)
5. Click **"Create project"**

### Step 2: Get Firebase Configuration

1. In your Firebase project, click the **⚙️ Settings** icon (top left)
2. Go to **"Project settings"**
3. Scroll down to **"Your apps"**
4. Click the **</>** (Web) icon
5. Register app with nickname: `Football Tournament Web`
6. Copy the `firebaseConfig` object

### Step 3: Update Firebase Config

Open `js/firebase-config.js` and replace with your config:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

### Step 4: Enable Firestore Database

1. In Firebase Console, click **"Build"** in left menu
2. Click **"Firestore Database"**
3. Click **"Create database"**
4. Select **"Start in test mode"** (for development)
5. Choose your region (e.g., `us-central1`)
6. Click **"Enable"**

### Step 5: Set Firestore Security Rules

1. Go to **Firestore Database** > **Rules** tab
2. Replace with these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tournaments/{tournament} {
      // Anyone can read tournaments
      allow read: if true;
      
      // Anyone can write tournaments (for now)
      // TODO: Add authentication in production
      allow write: if true;
    }
  }
}
```

3. Click **"Publish"**

### Step 6: Deploy to Firebase Hosting

#### A. Login to Firebase

```bash
firebase login
```

This will open your browser for authentication.

#### B. Initialize Firebase

```bash
firebase init
```

- **Select features**: Use space to select:
  - ✓ Firestore
  - ✓ Hosting
  
- **Select project**: Choose **"Use an existing project"**
  - Select your project from the list

- **Firestore Rules**: Press Enter (use default `firestore.rules`)

- **Firestore Indexes**: Press Enter (use default `firestore.indexes.json`)

- **Public directory**: Type `.` (dot) and press Enter
  - This means current directory

- **Configure as single-page app**: Type `n` and press Enter

- **Set up automatic builds**: Type `n` and press Enter

- **File overwrites**: Type `n` for all (don't overwrite existing files)

#### C. Deploy

```bash
firebase deploy
```

Wait for deployment to complete (~1-2 minutes).

### Step 7: Access Your Live App! 🎉

Your app will be live at:
```
https://YOUR-PROJECT-ID.firebaseapp.com
```

You can also set up a custom domain in Firebase Console > Hosting > Add custom domain.

---

## Testing Locally with Firebase

To test Firebase integration locally before deploying:

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

The app will automatically connect to your Firebase project.

---

## Troubleshooting

### "Firebase is not defined" error

- Make sure you've updated `js/firebase-config.js` with your credentials
- Check browser console for loading errors
- Verify Firebase SDK scripts are loading in `index.html`

### "Permission denied" in Firestore

- Check Firestore Rules are set to allow read/write
- Verify your Firebase project is properly initialized

### Tournament not syncing across devices

- Open browser console on both devices
- Look for "✅ Using Firebase for storage" message
- If you see "📦 Using localStorage", Firebase config is missing

### Deployment fails

```bash
# Re-authenticate
firebase login --reauth

# Try deploying again
firebase deploy
```

---

## Production Best Practices

### 1. Secure Firestore Rules

For production, implement proper authentication:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tournaments/{tournament} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                              request.auth.uid == resource.data.creatorId;
    }
  }
}
```

### 2. Add Firebase Authentication

Update your app to use Firebase Auth for admin features.

### 3. Enable Firebase Analytics

Track tournament usage and engagement.

### 4. Set up Custom Domain

1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow the DNS setup instructions

---

## Alternative: Deploy Without Firebase

If you don't want to use Firebase, the app falls back to localStorage:

### Deploy to GitHub Pages

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages
```

Enable GitHub Pages in your repo settings.

### Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Done! Get instant URL

### Deploy to Vercel

```bash
npx vercel
```

---

## Support

For issues or questions, check the console logs and README.md

**Note**: Without Firebase, tournaments only work in the same browser (localStorage limitation).
