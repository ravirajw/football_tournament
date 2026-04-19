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
  teamSetupDiv.style.flexDirection = "column";
  teamSetupDiv.style.gap = "12px";

  // Create team cards using teamCardView
  const redCard = teamCardView({
    teamColor: "red",
    teamName: "Red Team",
    inputId: "redPlayerInput",
    playerListId: "redPlayers",
  });
  redCard.style.width = "100%";
  teamSetupDiv.appendChild(redCard);

  const blackCard = teamCardView({
    teamColor: "black",
    teamName: "Black Team",
    inputId: "blackPlayerInput",
    playerListId: "blackPlayers",
  });
  blackCard.style.width = "100%";
  teamSetupDiv.appendChild(blackCard);

  const whiteCard = teamCardView({
    teamColor: "white",
    teamName: "White Team",
    inputId: "whitePlayerInput",
    playerListId: "whitePlayers",
  });
  whiteCard.style.width = "100%";
  teamSetupDiv.appendChild(whiteCard);

  // Buttons container (responsive - adapts to available space)
  const buttonsDiv = document.createElement("div");
  buttonsDiv.style.display = "flex";
  buttonsDiv.style.flexDirection = "column";
  buttonsDiv.style.gap = "8px";
  buttonsDiv.style.marginTop = "12px";
  buttonsDiv.innerHTML = `
    <button class="btn-primary" style="width: 100%; padding: 16px; font-size: 18px" onclick="addTestPlayers()">
      Add Test Players
    </button>
    <button class="btn-success" style="width: 100%; padding: 16px; font-size: 18px" onclick="startTournament()">
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
