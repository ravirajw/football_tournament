/**
 * Football Tournament Manager - Configuration
 * Version: 1.6.0
 *
 * Central configuration file for all constants and settings
 */

// ============================================
// APPLICATION CONFIGURATION
// ============================================
const CONFIG = {
  // Storage
  STORAGE_KEY: "footballTournaments",
  APP_VERSION: "v3.1.2",
  IS_TESTING: false,
  SUPER_USER_CODES: ["SUPER1", "GOAL2", "KICK3", "PASS4", "WIN5"],

  // Match Timing
  MATCH_DURATION_SECONDS: 600, // 10 minutes (can be adjusted for different tournament formats)
  TIMER_UPDATE_INTERVAL: 1000, // 1 second - how often to update match timers
  UTC_CLOCK_INTERVAL: 1000, // 1 second - how often to update UTC clock display
  STORAGE_POLL_INTERVAL: 2000, // 2 seconds - localStorage sync polling (when not using Firebase)
  COMPLETION_CHECK_INTERVAL: 1000, // 1 second - check for tournament completion
};

// ============================================
// COLOR SCHEME
// ============================================
const COLORS = {
  // Team Colors (must match teams object in main app)
  TEAM_RED: "#e74c3c",
  TEAM_BLUE: "#3498db",
  TEAM_GREEN: "#2ecc71",
  TEAM_YELLOW: "#f39c12",

  // Match Status Colors
  STATUS_COMPLETED: "green",
  STATUS_LIVE: "red",
  STATUS_PENDING: "gray",

  // UI Theme Colors
  PRIMARY_GRADIENT: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  SUCCESS: "#28a745",
  WARNING: "#ffc107",
  DANGER: "#dc3545",
  INFO: "#17a2b8",
  PURPLE: "#6f42c1",
};

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
