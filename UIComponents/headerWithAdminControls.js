// headerWithAdminControls.js
// Modular Header with Date and Admin Controls component

function headerWithAdminControls() {
  const headerDiv = document.createElement("div");
  headerDiv.style.display = "flex";
  headerDiv.style.justifyContent = "space-between";
  headerDiv.style.alignItems = "center";
  headerDiv.style.marginBottom = "16px";
  headerDiv.style.flexWrap = "wrap";
  headerDiv.style.gap = "8px";

  // Date and Status section
  const dateDiv = document.createElement("div");
  dateDiv.style.fontSize = "0.8em";
  dateDiv.style.fontWeight = "normal";
  dateDiv.style.color = "#666";
  dateDiv.style.display = "flex";
  dateDiv.style.flexDirection = "column";
  dateDiv.style.gap = "4px";
  // TODO: Why are we using innerHTML here? Consider refactoring to use createElement like in headerView.js.
  dateDiv.innerHTML = `
    <div style="font-weight: 600;">📅 <strong id="dateText"></strong></div>
    <div id="tournamentStatus" style="font-weight: 600;"></div>
  `;
  headerDiv.appendChild(dateDiv);

  // Admin login button
  const adminLoginDiv = document.createElement("div");
  adminLoginDiv.id = "adminControls";
  adminLoginDiv.style.display = "none";
  adminLoginDiv.style.fontSize = "0.8em";
  adminLoginDiv.style.fontWeight = "normal";
  // TODO: Why are we using innerHTML here? Consider refactoring to use createElement like in headerView.js.
  adminLoginDiv.innerHTML = `<button class="btn-primary" onclick="showAdminLogin()" style="padding: 8px 16px">🔐 Admin Login</button>`;
  headerDiv.appendChild(adminLoginDiv);

  // Admin logout button
  const adminLogoutDiv = document.createElement("div");
  adminLogoutDiv.id = "adminStatus";
  adminLogoutDiv.style.display = "none";
  adminLogoutDiv.style.fontSize = "0.8em";
  adminLogoutDiv.style.fontWeight = "normal";
  // TODO: Why are we using innerHTML here? Consider refactoring to use createElement like in headerView.js.
  adminLogoutDiv.innerHTML = `<button class="btn-danger" onclick="logoutAdmin()" style="padding: 8px 16px">🔐 Admin Logout</button>`;
  headerDiv.appendChild(adminLogoutDiv);

  return headerDiv;
}

// Export for usage
window.headerWithAdminControls = headerWithAdminControls;
