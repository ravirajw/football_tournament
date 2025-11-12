// keeperModal.js
// Modular Goalkeeper Selection Modal component

function createKeeperModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "keeperModal";
  modal.innerHTML = `
    <div class="modal-content" style="position: relative">
      <div style="display: flex; align-items: center; margin-bottom: 16px">
        <h2 style="margin: 0; color: #667eea; flex: 1; word-break: break-word">
          🧤 Select Goalkeepers
        </h2>
        <button onclick="closeKeeperModal()" style="background: none; border: none; font-size: 24px; color: #333; cursor: pointer; font-weight: bold; line-height: 1; padding: 0;">✕</button>
      </div>
      <p style="margin-bottom: 16px; color: #666">
        Choose a goalkeeper for each team to start the match.
      </p>
      <div id="keeperSelectionContent"></div>
      <button class="btn-success" style="flex: 1; width: 100%; padding: 16px 40px; font-size: 18px" onclick="confirmKeepers()">Start Match</button>
    </div>
  `;
  document.body.appendChild(modal);
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
