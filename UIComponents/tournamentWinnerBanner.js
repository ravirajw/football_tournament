// tournamentWinnerBanner.js
// Tournament Winner Banner Component - Mobile Responsive

/**
 * Creates a tournament winner banner with responsive design
 * @param {Object} options - Configuration options
 * @param {string} options.winnerName - Name of the winning team
 * @param {string} options.winnerColor - Color of the winning team
 * @returns {HTMLElement} - Winner banner element
 */
function createTournamentWinnerBanner({ winnerName, winnerColor }) {
  const banner = document.createElement("div");
  banner.id = "winnerSection";
  banner.style.cssText = `
    background: linear-gradient(135deg, #f4d03f 0%, #f39c12 100%);
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 16px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  `;

  // Use headerView for title with trophy icons and styling
  const titleContainer = headerView({
    leftEmoji: "🏆",
    title: "TOURNAMENT WINNER",
    rightEmoji: "🏆",
    textColor: "#333",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    letterSpacing: "1px",
  });

  // Get team color emoji based on team name
  const getTeamEmoji = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("red")) return "🔴";
    if (lowerName.includes("white")) return "⚪";
    if (lowerName.includes("black")) return "⚫";
    return "⚽";
  };
  const teamEmoji = getTeamEmoji(winnerName);

  // Use headerView for team name with team color and styling
  const teamNameContainer = headerView({
    leftEmoji: teamEmoji,
    title: `${winnerName.toUpperCase()} TEAM`,
    rightEmoji: teamEmoji,
    fontSize: 32,
    textColor: winnerColor,
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    letterSpacing: "2px",
  });
  teamNameContainer.style.margin = "32px 0 32px 0";

  // Use headerView for congratulations with styling
  const congratsContainer = headerView({
    leftEmoji: "🎉",
    title: "Congratulations!",
    rightEmoji: "🎉",
    textColor: "#333",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
    fontStyle: "italic",
    opacity: "0.9",
  });

  // Append elements to banner
  banner.appendChild(titleContainer);
  banner.appendChild(teamNameContainer);
  banner.appendChild(congratsContainer);

  return banner;
}

// Export for usage
window.createTournamentWinnerBanner = createTournamentWinnerBanner;
