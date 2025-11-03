// adminLoginModal.js
// Modular Admin Login Modal component

function createAdminLoginModal() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "adminLoginModal";
  modal.innerHTML = `
    <div class="modal-content" style="position: relative">
      <div style="display: flex; align-items: center; margin-bottom: 16px">
        <h2 style="margin: 0; color: #667eea; flex: 1; word-break: break-word">
          🔐 Admin Login
        </h2>
        <button onclick="closeAdminLogin()" style="background: none; border: none; font-size: 24px; color: #333; cursor: pointer; font-weight: bold; line-height: 1; padding: 0;">✕</button>
      </div>
      <p style="margin-bottom: 16px; color: #666">
        Enter the admin password to manage this tournament.
      </p>
      <input type="password" id="adminLoginInput" placeholder="Enter admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 16px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <button class="btn-success" style="flex: 1; width: 100%; padding: 16px 40px; font-size: 18px" onclick="verifyAdminLogin()">Login</button>
    </div>
  `;
  document.body.appendChild(modal);
}

// Export for usage
window.createAdminLoginModal = createAdminLoginModal;
