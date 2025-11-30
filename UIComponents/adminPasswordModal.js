// adminPasswordModal.js
// Modular Admin Password Modal component

function createAdminPasswordModal() {
  return modalView({
    id: "adminPasswordModal",
    icon: "🔐",
    title: "Set Admin Password",
    description: "Create a password to manage this tournament. You'll need this password to start matches, record events, and make changes.",
    content: `
      <input type="password" id="adminPasswordInput" placeholder="Enter admin password" value="${typeof CONFIG !== 'undefined' && CONFIG.IS_TESTING ? '1111' : ''}" style="width: 100%; padding: 12px; margin-bottom: 8px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <input type="password" id="adminPasswordConfirm" placeholder="Confirm admin password" value="${typeof CONFIG !== 'undefined' && CONFIG.IS_TESTING ? '1111' : ''}" style="width: 100%; padding: 12px; margin-bottom: 16px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
      <div style="margin-top: 10px; margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 10px;">
        <label style="display: block; margin-bottom: 5px; color: #666; font-size: 14px;">Super User Code (Required for new tournaments)</label>
        <input type="text" id="superUserCodeInput" placeholder="Enter Super User Code" style="width: 100%; padding: 12px; margin-bottom: 8px; border: 2px solid #ffc107; border-radius: 4px; font-size: 16px;" />
        <div style="font-size: 12px; color: #999;">Not required if using Test Players</div>
      </div>
    `,
    buttonText: "Start Tournament",
    buttonOnClick: "setAdminPassword",
    closeHandler: "closeAdminPasswordModal",
  });
}

// Export for usage
window.createAdminPasswordModal = createAdminPasswordModal;
