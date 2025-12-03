// tournamentLoadedView.js
// View component for tournament loaded state

function tournamentLoadedView() {
  const viewDiv = document.createElement("div");
  viewDiv.id = "tournamentLoadedView";

  // Add header with admin controls
  const header = headerWithAdminControls();
  viewDiv.appendChild(header);

  return viewDiv;
}

// Export for usage
window.tournamentLoadedView = tournamentLoadedView;
