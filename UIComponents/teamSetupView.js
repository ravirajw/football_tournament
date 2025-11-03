// UIComponents/teamSetupView.js
// Team Setup view component using containerView

/**
 * Creates the complete Team Setup view with team cards and start button
 * @returns {HTMLElement}
 */
function teamSetupView() {
  // Create team-setup container (responsive - horizontal or vertical layout)
  const teamSetupDiv = document.createElement("div");
  teamSetupDiv.className = "team-setup";
  teamSetupDiv.style.display = "flex";
  teamSetupDiv.style.flexDirection = "row";
  teamSetupDiv.style.flexWrap = "wrap";
  teamSetupDiv.style.gap = "16px";
  teamSetupDiv.style.justifyContent = "center";

  // Create team cards using teamCardView
  const redCard = teamCardView({
    teamColor: "red",
    teamName: "Red Team",
    inputId: "redPlayerInput",
    playerListId: "redPlayers",
  });
  redCard.style.flex = "1";
  redCard.style.minWidth = "150px";
  teamSetupDiv.appendChild(redCard);

  const blackCard = teamCardView({
    teamColor: "black",
    teamName: "Black Team",
    inputId: "blackPlayerInput",
    playerListId: "blackPlayers",
  });
  blackCard.style.flex = "1";
  blackCard.style.minWidth = "150px";
  teamSetupDiv.appendChild(blackCard);

  const whiteCard = teamCardView({
    teamColor: "white",
    teamName: "White Team",
    inputId: "whitePlayerInput",
    playerListId: "whitePlayers",
  });
  whiteCard.style.flex = "1";
  whiteCard.style.minWidth = "150px";
  teamSetupDiv.appendChild(whiteCard);

  // Buttons container (responsive - adapts to available space)
  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.display = "flex";
  buttonsDiv.style.flexDirection = "row";
  buttonsDiv.style.justifyContent = "center";
  buttonsDiv.style.alignItems = "center";
  buttonsDiv.style.gap = "8px";
  buttonsDiv.style.marginTop = "16px";
  buttonsDiv.style.flexWrap = "wrap"; // Wrap to vertical on small screens
  buttonsDiv.innerHTML = `
    <button class="btn-primary" style="flex: 1; min-width: 150px; padding: 15px 40px; font-size: 18px" onclick="addTestPlayers()">
      Add Test Players
    </button>
    <button class="btn-success" style="flex: 1; min-width: 150px; padding: 15px 40px; font-size: 18px" onclick="startTournament()">
      Start Tournament
    </button>
  `;

  // Return containerView with Team Setup title and content
  return containerView({
    title: "Team Setup",
    content: [teamSetupDiv, buttonsDiv],
  });
}

// Export for usage in other files
window.teamSetupView = teamSetupView;
