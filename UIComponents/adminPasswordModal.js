// adminPasswordModal.js
// Modular Admin Password Modal component

function createAdminPasswordModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "adminPasswordModal";
  modal.innerHTML = `
    <div class="modal-content" style="position: relative">
      <div style="display: flex; align-items: center; margin-bottom: 16px">
        <h2 style="margin: 0; color: #667eea; flex: 1; word-break: break-word">
          🔐 Set Admin Password
        </h2>
        <button onclick="closeAdminPasswordModal()" style="background: none; border: none; font-size: 24px; color: #333; cursor: pointer; font-weight: bold; line-height: 1; padding: 0;">✕</button>
      </div>
      <p style="margin-bottom: 16px; color: #666">
        Create a password to manage this tournament. You'll need this password to start matches, record events, and make changes.
      </p>
      <input type="password" id="adminPasswordInput" placeholder="Enter admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 8px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <input type="password" id="adminPasswordConfirm" placeholder="Confirm admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 16px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <button class="btn-success" style="flex: 1; width: 100%; padding: 16px 40px; font-size: 18px" onclick="setAdminPassword()">Start Tournament</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Export for usage
window.createAdminPasswordModal = createAdminPasswordModal;
