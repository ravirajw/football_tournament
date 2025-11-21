// keeperModal.js
// Modular Goalkeeper Selection Modal component

function createKeeperModal() {
  return modalView({
    id: "keeperModal",
    icon: "🧤",
    title: "Select Goalkeepers",
    description: "Choose a goalkeeper for each team to start the match.",
    content: `
      <div id="keeperSelectionContent"></div>
    `,
    buttonText: "Start Match",
    buttonOnClick: "confirmKeepers",
    closeHandler: "closeKeeperModal",
  });
}

// Close modal function
function closeKeeperModal() {
  const modal = document.getElementById("keeperModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Export for usage
window.createKeeperModal = createKeeperModal;
window.closeKeeperModal = closeKeeperModal;
