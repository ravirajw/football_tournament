# Football Tournament Manager

A responsive web application for managing football tournaments with real-time updates across devices.

## Features

- **Tournament Management**: Create and manage multi-team football tournaments
- **Real-time Updates**: Live match scores, timers, and standings sync across all devices
- **Admin Controls**: Password-protected admin interface for match management
- **Shareable Links**: Generate unique tournament links for public viewing
- **Player Statistics**: Track goals, assists, clean sheets, and more
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Setup Instructions

### 1. Firebase Configuration

To enable cross-device real-time synchronization, you need to set up Firebase:

#### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and follow the setup wizard
3. Once created, click on the **Web** icon (</>) to add a web app
4. Register your app with a nickname (e.g., "Football Tournament")
5. Copy the Firebase configuration object

#### Update Firebase Config

Open `js/firebase-config.js` and replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

#### Enable Firestore Database

1. In Firebase Console, go to **Build** > **Firestore Database**
2. Click "Create Database"
3. Choose **Start in test mode** (for development)
4. Click "Next" and select your region
5. Click "Enable"

#### Security Rules (Optional but Recommended)

Update Firestore security rules to allow read/write access:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tournaments/{tournament} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

For production, implement proper authentication and authorization rules.

### 2. Local Development

To run the app locally:

```bash
# Navigate to project directory
cd football_tournament

# Start a local server (Python 3)
python3 -m http.server 8000

# Or use Node.js http-server
npx http-server -p 8000
```

Open your browser and navigate to: `http://localhost:8000`

### 3. Deploy to Firebase Hosting

#### Login to Firebase

```bash
firebase login
```

#### Initialize Firebase Hosting

```bash
firebase init hosting
```

Select:
- Use existing project (choose your Firebase project)
- Public directory: `.` (current directory)
- Configure as single-page app: `No`
- Set up automatic builds: `No`
- Don't overwrite existing files

#### Deploy

```bash
firebase deploy --only hosting
```

Your app will be live at: `https://YOUR_PROJECT_ID.firebaseapp.com`

## How to Use

### Creating a Tournament

1. Open the app
2. Add 3-5 players per team (Red, Black, White)
3. Set tournament date
4. Create an admin password
5. Click "Start Tournament"

### Admin Features

- **Start/Pause/End Matches**: Control match flow
- **Record Events**: Goals, assists, yellow/red cards
- **Manage Timers**: Countdown timers for each match
- **Share Links**: Generate public viewing links

### Public Viewing

- Share the tournament link with viewers
- No admin password needed to watch
- Real-time updates without refresh
- View live scores, timers, and standings

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase Firestore (optional)
- **Hosting**: Firebase Hosting (or any static host)
- **Real-time**: Firestore onSnapshot / localStorage polling

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Troubleshooting

### Firebase not working

- Check browser console for errors
- Verify Firebase config in `js/firebase-config.js`
- Ensure Firestore is enabled in Firebase Console
- Check Firestore security rules

### LocalStorage fallback

If Firebase is not configured, the app automatically falls back to localStorage:
- Works only in the same browser
- No cross-device sync
- Data persists locally

### Tournament not found

- Tournaments created with localStorage won't work on other browsers
- Use Firebase for cross-device access
- Check if localStorage was cleared

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - Feel free to use this for your tournaments!
