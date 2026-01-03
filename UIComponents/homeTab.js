/**
 * Home Tab Screen Component
 * Main navigation hub with Tournaments and Players tabs
 * 
 * View Hierarchy:
 * Shell -> Container -> MainContent and TabBar
 * MainContent -> renderTournamentsTab and renderPlayersTab
 * TabBar -> Tournaments and Players tabs
 */

function homeTabView() {
  const shell = document.createElement("div");
  shell.className = "app-shell";

  const container = document.createElement("div");
  container.className = "mobile-container";

  // Content Area
  const mainContent = document.createElement("main");
  mainContent.id = "mainContent";
  mainContent.className = "main-content";

  // Tab Bar
  const tabBar = document.createElement("nav");
  tabBar.className = "bottom-tab-bar";

  const tabs = [
    { id: "tournaments", label: "Tournaments", icon: "🏆" },
    { id: "players", label: "Players", icon: "👥" },
  ];

  const tabElements = {};

  tabs.forEach((tab) => {
    const tabItem = document.createElement("div");
    tabItem.className = `tab-item ${tab.id === "tournaments" ? "active" : ""}`;
    tabItem.innerHTML = `
      <span class="tab-icon">${tab.icon}</span>
      <span class="tab-label">${tab.label}</span>
    `;

    tabItem.addEventListener("click", () => {
      // Update UI
      Object.values(tabElements).forEach((el) => el.classList.remove("active"));
      tabItem.classList.add("active");

      // Switch Content
      if (tab.id === "tournaments") {
        renderTournamentsTab(mainContent);
      } else {
        renderPlayersTab(mainContent);
      }
    });

    tabElements[tab.id] = tabItem;
    tabBar.appendChild(tabItem);
  });

  container.appendChild(mainContent);
  container.appendChild(tabBar);
  shell.appendChild(container);

  // Initial render
  renderTournamentsTab(mainContent);

  return shell;
}

function renderTournamentsTab(container) {
  container.innerHTML = `
    <h1 style="color: var(--ink-black)">Tournaments</h1>
  `;
}

function renderPlayersTab(container) {
  container.innerHTML = `
    <h1 style="color: var(--ink-black)">Players</h1>
  `;
}
