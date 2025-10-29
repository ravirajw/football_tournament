// Configuration and Constants
const CONFIG = {
    STORAGE_KEY: 'footballTournaments',
    MATCH_DURATION: 600, // 10 minutes in seconds
    MAX_PLAYERS_PER_TEAM: 5,
    ROUNDS: 3,
    FIRST_TO_SCORE: 3, // First team to score 3 goals wins (except final)
    
    TEAMS: {
        red: { name: 'Red Team', color: '#d32f2f' },
        black: { name: 'Black Team', color: '#424242' },
        white: { name: 'White Team', color: '#9e9e9e' }
    },
    
    MATCH_STATUS: {
        PENDING: 'pending',
        LIVE: 'live',
        COMPLETED: 'completed'
    },
    
    EVENT_TYPES: {
        GOAL: 'goal',
        SAVE: 'save'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
