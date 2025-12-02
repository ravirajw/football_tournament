/**
 * Player Database Service
 * Manages player records in Firebase Firestore
 */

class PlayerDatabaseService {
  constructor(firebaseStorage) {
    this.firebaseStorage = firebaseStorage;
    this.db = firebaseStorage ? firebaseStorage.db : null;
  }

  /**
   * Generate a custom player ID from name
   * Format: lowercase_name_randomcode (e.g., "marcus_a3x9k")
   */
  generatePlayerId(name) {
    const cleanName = name.toLowerCase().replace(/\s+/g, '_');
    const randomCode = Math.random().toString(36).substring(2, 7);
    return `${cleanName}_${randomCode}`;
  }

  /**
   * Get or create a player by name
   * @param {string} name - Player name
   * @returns {Promise<Object>} Player document
   */
  async getOrCreatePlayer(name) {
    if (!this.db) {
      console.error('Firebase not initialized');
      return null;
    }

    try {
      // Search for existing player by name
      const playersRef = this.db.collection('players');
      const snapshot = await playersRef.where('name', '==', name).get();

      if (!snapshot.empty) {
        // Player exists, return first match
        const doc = snapshot.docs[0];
        return { id: doc.id, ...doc.data() };
      }

      // Create new player with custom ID
      const playerId = this.generatePlayerId(name);
      const newPlayer = {
        name: name,
        number: '',
        picture: '',
        isVerified: true,
        
        // Lifetime Statistics
        gamesPlayed: 0,
        gamesWon: 0,
        gamesLost: 0,
        gamesDrawn: 0,
        goals: 0,
        assists: 0,
        saves: 0,
        cleanSheets: 0,
        ownGoals: 0,
        fouls: 0,
        yellowCards: 0,
        redCards: 0,
        finalsPlayed: 0,
        finalsWon: 0,
        finalsLost: 0,
        
        // Metadata
        createdAt: new Date().toISOString(),
        lastPlayed: new Date().toISOString(),
        tournaments: []
      };

      // Use set() with custom ID instead of add()
      await playersRef.doc(playerId).set(newPlayer);
      return { id: playerId, ...newPlayer };
    } catch (error) {
      console.error('Error getting/creating player:', error);
      return null;
    }
  }

  /**
   * Update player statistics
   * @param {string} playerId - Player document ID
   * @param {Object} stats - Stats to add to player's lifetime stats
   * @param {string} tournamentId - Tournament ID to add to player's history
   */
  async updatePlayerStats(playerId, stats, tournamentId) {
    if (!this.db) {
      console.error('Firebase not initialized');
      return false;
    }

    try {
      const playerRef = this.db.collection('players').doc(playerId);
      const doc = await playerRef.get();

      if (!doc.exists) {
        console.error('Player not found:', playerId);
        return false;
      }

      const currentData = doc.data();
      
      // Add tournament to history if not already present
      const tournaments = currentData.tournaments || [];
      if (tournaments.includes(tournamentId)) {
        console.log(`Stats for tournament ${tournamentId} already recorded for player ${playerId}`);
        return true; // Already synced, treat as success
      }
      tournaments.push(tournamentId);

      // Update stats by adding new stats to existing
      const updates = {
        gamesPlayed: (currentData.gamesPlayed || 0) + (stats.gamesPlayed || 0),
        gamesWon: (currentData.gamesWon || 0) + (stats.gamesWon || 0),
        gamesLost: (currentData.gamesLost || 0) + (stats.gamesLost || 0),
        gamesDrawn: (currentData.gamesDrawn || 0) + (stats.gamesDrawn || 0),
        goals: (currentData.goals || 0) + (stats.goals || 0),
        assists: (currentData.assists || 0) + (stats.assists || 0),
        saves: (currentData.saves || 0) + (stats.saves || 0),
        cleanSheets: (currentData.cleanSheets || 0) + (stats.cleanSheets || 0),
        ownGoals: (currentData.ownGoals || 0) + (stats.ownGoals || 0),
        finalsPlayed: (currentData.finalsPlayed || 0) + (stats.finalsPlayed || 0),
        finalsWon: (currentData.finalsWon || 0) + (stats.finalsWon || 0),
        finalsLost: (currentData.finalsLost || 0) + (stats.finalsLost || 0),
        lastPlayed: new Date().toISOString(),
        tournaments: tournaments
      };

      await playerRef.update(updates);
      console.log(`Updated stats for player ${playerId}`);
      return true;
    } catch (error) {
      console.error('Error updating player stats:', error);
      return false;
    }
  }

  /**
   * Get player by name
   * @param {string} name - Player name
   * @returns {Promise<Object|null>} Player document or null
   */
  async getPlayerByName(name) {
    if (!this.db) {
      console.error('Firebase not initialized');
      return null;
    }

    try {
      const playersRef = this.db.collection('players');
      const snapshot = await playersRef.where('name', '==', name).get();

      if (snapshot.empty) {
        return null;
      }

      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } catch (error) {
      console.error('Error getting player:', error);
      return null;
    }
  }

  /**
   * Get all players
   * @returns {Promise<Array>} Array of player documents
   */
  async getAllPlayers() {
    if (!this.db) {
      console.error('Firebase not initialized');
      return [];
    }

    try {
      const snapshot = await this.db.collection('players').get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error getting all players:', error);
      return [];
    }
  }
}

// Export for usage
if (typeof window !== 'undefined') {
  window.PlayerDatabaseService = PlayerDatabaseService;
}
