// UIComponents/teamCardView.js
// Reusable team card component

/**
 * Creates a team card view with input field and player list
 * @param {Object} options
 * @param {string} options.teamColor - Team color (red, black, white)
 * @param {string} options.teamName - Display name of the team
 * @param {string} options.inputId - ID for the player input field
 * @param {string} options.playerListId - ID for the player list container
 * @returns {HTMLElement}
 */
function teamCardView({ teamColor, teamName, inputId, playerListId }) {
  const card = document.createElement("div");
  card.className = `team-card team-${teamColor}`;
  card.style.marginBottom = "0px";
  card.style.borderRadius = "16px";
  card.style.padding = "16px";
  card.style.boxSizing = "border-box";

  // Team name heading
  const heading = document.createElement("h3");
  heading.textContent = teamName;
  heading.style.margin = "0 0 16px 0";
  card.appendChild(heading);

  // Player input container
  const playerInputDiv = document.createElement("div");
  playerInputDiv.className = "player-input";
  playerInputDiv.style.display = "flex";
  playerInputDiv.style.gap = "8px";
  playerInputDiv.style.marginBottom = "16px";
  playerInputDiv.style.flexWrap = "wrap";

  // Input field
  const input = document.createElement("input");
  input.type = "text";
  input.id = inputId;
  input.placeholder = "Enter player name";
  input.style.flex = "1";
  input.style.minWidth = "150px";
  input.style.padding = "8px 12px";
  input.style.borderRadius = "8px";
  input.style.border = "1px solid #ddd";
  input.style.fontSize = "14px";
  playerInputDiv.appendChild(input);

  // Add button
  const button = document.createElement("button");
  button.className = "btn-primary";
  button.textContent = "+";
  button.style.fontWeight = "bold";
  button.onclick = function () {
    addPlayer(teamColor);
  };
  button.style.padding = "12px 12px";
  button.style.borderRadius = "8px";
  button.style.whiteSpace = "nowrap";
  playerInputDiv.appendChild(button);

  card.appendChild(playerInputDiv);

  // Player list container
  const playerListDiv = document.createElement("div");
  playerListDiv.className = "player-list";
  playerListDiv.id = playerListId;
  card.appendChild(playerListDiv);

  return card;
}

// Export for usage in other files
window.teamCardView = teamCardView;
