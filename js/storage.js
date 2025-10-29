// Storage Manager - Handles localStorage operations
class StorageManager {
    constructor() {
        this.storageKey = CONFIG.STORAGE_KEY;
    }

    // Load all tournaments from localStorage
    loadTournaments() {
        console.log('Loading tournaments from localStorage...');
        const stored = localStorage.getItem(this.storageKey);
        console.log('Raw localStorage data:', stored);
        
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

    // Save all tournaments to localStorage
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

    // Save a single tournament
    saveTournament(tournamentId, tournamentData) {
        const tournaments = this.loadTournaments();
        tournaments[tournamentId] = tournamentData;
        return this.saveTournaments(tournaments);
    }

    // Get a specific tournament
    getTournament(tournamentId) {
        const tournaments = this.loadTournaments();
        return tournaments[tournamentId] || null;
    }

    // Delete a tournament
    deleteTournament(tournamentId) {
        const tournaments = this.loadTournaments();
        delete tournaments[tournamentId];
        return this.saveTournaments(tournaments);
    }

    // Clear all tournaments (for testing)
    clearAll() {
        localStorage.removeItem(this.storageKey);
        console.log('All tournaments cleared from localStorage');
    }
}
