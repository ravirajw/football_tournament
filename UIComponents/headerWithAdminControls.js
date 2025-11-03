// headerWithAdminControls.js
// Modular Header with Date and Admin Controls component

function headerWithAdminControls() {
  const headerDiv = document.createElement("div");
  headerDiv.style.display = "flex";
  headerDiv.style.justifyContent = "space-between";
  headerDiv.style.alignItems = "center";
  headerDiv.style.marginBottom = "16px";

  // Date section
  const dateDiv = document.createElement("div");
  dateDiv.style.fontSize = "0.8em";
  dateDiv.style.fontWeight = "normal";
  dateDiv.style.color = "#666";
  dateDiv.innerHTML = '📅 <strong id="dateText"></strong>';
  headerDiv.appendChild(dateDiv);

  // Admin login button
  const adminLoginDiv = document.createElement("div");
  adminLoginDiv.id = "adminControls";
  adminLoginDiv.style.display = "none";
  adminLoginDiv.style.fontSize = "0.8em";
  adminLoginDiv.style.fontWeight = "normal";
  adminLoginDiv.innerHTML = `<button class="btn-primary" onclick="showAdminLogin()" style="padding: 8px 16px">🔐 Admin Login</button>`;
  headerDiv.appendChild(adminLoginDiv);

  // Admin logout button
  const adminLogoutDiv = document.createElement("div");
  adminLogoutDiv.id = "adminStatus";
  adminLogoutDiv.style.display = "none";
  adminLogoutDiv.style.fontSize = "0.8em";
  adminLogoutDiv.style.fontWeight = "normal";
  adminLogoutDiv.innerHTML = `<button class="btn-danger" onclick="logoutAdmin()" style="padding: 8px 16px">🔐 Admin Logout</button>`;
  headerDiv.appendChild(adminLogoutDiv);

  return headerDiv;
}

// Export for usage
window.headerWithAdminControls = headerWithAdminControls;
