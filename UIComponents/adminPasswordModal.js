// adminPasswordModal.js
// Modular Admin Password Modal component

function createAdminPasswordModal() {
  return modalView({
    id: "adminPasswordModal",
    icon: "🔐",
    title: "Set Admin Password",
    description: "Create a password to manage this tournament. You'll need this password to start matches, record events, and make changes.",
    content: `
      <input type="password" id="adminPasswordInput" placeholder="Enter admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 8px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <input type="password" id="adminPasswordConfirm" placeholder="Confirm admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 16px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
    `,
    buttonText: "Start Tournament",
    buttonOnClick: "setAdminPassword",
    closeHandler: "closeAdminPasswordModal",
  });
}

// Export for usage
window.createAdminPasswordModal = createAdminPasswordModal;
