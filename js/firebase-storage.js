// Firebase Storage Manager - Handles Firestore operations
class FirebaseStorageManager {
    constructor() {
        this.db = null;
        this.tournamentsCollection = null;
        this.listeners = {};
    }

    // Initialize Firebase (call this after firebase-config.js loads)
    initialize() {
        if (typeof firebase === 'undefined') {
            console.error('Firebase SDK not loaded');
            return false;
        }
        
        this.db = firebase.firestore();
        this.tournamentsCollection = this.db.collection('tournaments');
        console.log('✅ Firebase Storage Manager initialized');
        return true;
    }

    // Load all tournaments from Firestore
    async loadTournaments() {
        try {
            console.log('Loading tournaments from Firestore...');
            const snapshot = await this.tournamentsCollection.get();
            const tournaments = {};
            
            snapshot.forEach(doc => {
                tournaments[doc.id] = doc.data();
            });
            
            console.log('Successfully loaded tournaments:', tournaments);
            return tournaments;
        } catch(e) {
            console.error('Error loading tournaments from Firestore:', e);
            return {};
        }
    }

    // Save a single tournament to Firestore
    async saveTournament(tournamentId, tournamentData) {
        try {
            await this.tournamentsCollection.doc(tournamentId).set(tournamentData);
            console.log('Tournament saved to Firestore:', tournamentId);
            return true;
        } catch(e) {
            console.error('Error saving tournament to Firestore:', e);
            return false;
        }
    }

    // Get a specific tournament
    async getTournament(tournamentId) {
        try {
            const doc = await this.tournamentsCollection.doc(tournamentId).get();
            if (doc.exists) {
                return doc.data();
            } else {
                console.log('Tournament not found:', tournamentId);
                return null;
            }
        } catch(e) {
            console.error('Error getting tournament:', e);
            return null;
        }
    }

    // Delete a tournament
    async deleteTournament(tournamentId) {
        try {
            await this.tournamentsCollection.doc(tournamentId).delete();
            console.log('Tournament deleted:', tournamentId);
            return true;
        } catch(e) {
            console.error('Error deleting tournament:', e);
            return false;
        }
    }

    // Real-time listener for tournament changes
    listenToTournament(tournamentId, callback) {
        console.log('🔥 Setting up real-time listener for tournament:', tournamentId);
        
        // Unsubscribe from previous listener if exists
        if (this.listeners[tournamentId]) {
            this.listeners[tournamentId]();
        }
        
        // Set up new listener
        this.listeners[tournamentId] = this.tournamentsCollection
            .doc(tournamentId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    console.log('🔥 Tournament updated in real-time:', tournamentId);
                    callback(doc.data());
                } else {
                    console.warn('Tournament no longer exists:', tournamentId);
                    callback(null);
                }
            }, (error) => {
                console.error('Error in real-time listener:', error);
            });
    }

    // Stop listening to a tournament
    stopListening(tournamentId) {
        if (this.listeners[tournamentId]) {
            this.listeners[tournamentId]();
            delete this.listeners[tournamentId];
            console.log('🛑 Stopped listening to tournament:', tournamentId);
        }
    }

    // Stop all listeners
    stopAllListeners() {
        Object.keys(this.listeners).forEach(tournamentId => {
            this.stopListening(tournamentId);
        });
    }

    // Clear all tournaments (for testing - use with caution!)
    async clearAll() {
        try {
            const snapshot = await this.tournamentsCollection.get();
            const batch = this.db.batch();
            
            snapshot.docs.forEach(doc => {
                batch.delete(doc.ref);
            });
            
            await batch.commit();
            console.log('All tournaments cleared from Firestore');
            return true;
        } catch(e) {
            console.error('Error clearing tournaments:', e);
            return false;
        }
    }
}

// Keep the old localStorage StorageManager as fallback
class StorageManager {
    constructor() {
        this.storageKey = CONFIG.STORAGE_KEY;
    }

    loadTournaments() {
        console.log('Loading tournaments from localStorage...');
        const stored = localStorage.getItem(this.storageKey);
        
        if (stored) {
            try {
                const tournaments = JSON.parse(stored);
                console.log('Successfully parsed tournaments:', tournaments);
                return tournaments;
            } catch(e) {
                console.error('Error parsing tournaments from localStorage:', e);
                return {};
            }
        } else {
            console.log('No tournaments found in localStorage');
            return {};
        }
    }

    saveTournaments(tournaments) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(tournaments));
            console.log('Tournaments saved to localStorage');
            return true;
        } catch(e) {
            console.error('Error saving tournaments to localStorage:', e);
            return false;
        }
    }

    saveTournament(tournamentId, tournamentData) {
        const tournaments = this.loadTournaments();
        tournaments[tournamentId] = tournamentData;
        return this.saveTournaments(tournaments);
    }

    getTournament(tournamentId) {
        const tournaments = this.loadTournaments();
        return tournaments[tournamentId] || null;
    }

    deleteTournament(tournamentId) {
        const tournaments = this.loadTournaments();
        delete tournaments[tournamentId];
        return this.saveTournaments(tournaments);
    }

    clearAll() {
        localStorage.removeItem(this.storageKey);
        console.log('All tournaments cleared from localStorage');
    }
}
