// adminLoginModal.js
// Modular Admin Login Modal component

function createAdminLoginModal() {
  return modalView({
    id: "adminLoginModal",
    icon: "🔐",
    title: "Admin Login",
    description: "Enter the admin password to manage this tournament.",
    content: `
      <input type="password" id="adminLoginInput" placeholder="Enter admin password" value="1111" style="width: 100%; padding: 12px; margin-bottom: 16px; border: 2px solid #667eea; border-radius: 4px; font-size: 16px;" />
    `,
    buttonText: "Login",
    buttonOnClick: "verifyAdminLogin",
    closeHandler: "closeAdminLogin",
  });
}

// Export for usage
window.createAdminLoginModal = createAdminLoginModal;
