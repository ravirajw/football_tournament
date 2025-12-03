// tournamentTabsView.js
// View component for tournament tabs navigation

function tournamentTabsView() {
  const viewDiv = document.createElement("div");
  viewDiv.id = "tournamentTabsView";

  // Tabs navigation container
  const tabsNav = document.createElement("div");
  tabsNav.className = "tabs-navigation";
  tabsNav.style.display = "flex";
  tabsNav.style.gap = "8px";
  tabsNav.style.marginBottom = "20px";
  tabsNav.style.borderBottom = "2px solid #e0e0e0";

  // Define tabs
  const tabs = [
    { id: "matches", label: "Matches", icon: "🏟️" },
    { id: "pointsTable", label: "Standings", icon: "📊" },
    { id: "leaderboard", label: "Leaders", icon: "🏆" },
    { id: "teams", label: "Teams", icon: "👥" },
  ];

  // Create tab buttons
  tabs.forEach((tab, index) => {
    const tabButton = document.createElement("button");
    tabButton.className = "tab-button";
    tabButton.id = `tab-${tab.id}`;

    // Create button content with icon and label
    const iconSpan = document.createElement("span");
    iconSpan.className = "tab-icon";
    iconSpan.textContent = tab.icon;

    const labelSpan = document.createElement("span");
    labelSpan.className = "tab-label";
    labelSpan.textContent = tab.label;

    tabButton.appendChild(iconSpan);
    tabButton.appendChild(labelSpan);

    // Equal width for all buttons - take full space
    tabButton.style.flex = "1";
    tabButton.style.padding = "12px 8px";
    tabButton.style.border = "1px solid #ddd";
    tabButton.style.borderRadius = "8px";
    tabButton.style.background = "transparent";
    tabButton.style.cursor = "pointer";
    tabButton.style.fontSize = "16px";
    tabButton.style.fontWeight = "600";
    tabButton.style.color = "#666";
    tabButton.style.transition = "all 0.3s ease";
    tabButton.style.display = "flex";
    tabButton.style.alignItems = "center";
    tabButton.style.justifyContent = "center";
    tabButton.style.gap = "8px";
    tabButton.style.minWidth = "0";
    tabButton.style.overflow = "hidden";

    // Set first tab as active by default
    if (index === 0) {
      tabButton.style.color = "#007bff";
      tabButton.style.borderColor = "#007bff";
      tabButton.style.backgroundColor = "#007bff20";
      tabButton.classList.add("active");
    }

    // Tab click handler
    tabButton.addEventListener("click", () => {
      // Remove active state from all tabs
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.style.color = "#666";
        btn.style.borderColor = "#ddd";
        btn.style.backgroundColor = "transparent";
        btn.classList.remove("active");
      });

      // Add active state to clicked tab
      tabButton.style.color = "#007bff";
      tabButton.style.borderColor = "#007bff";
      tabButton.style.backgroundColor = "#007bff20";
      tabButton.classList.add("active");

      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none";
      });

      // Show selected tab content
      const contentDiv = document.getElementById(`content-${tab.id}`);
      if (contentDiv) {
        contentDiv.style.display = "block";
      }
    });

    tabsNav.appendChild(tabButton);
  });

  viewDiv.appendChild(tabsNav);

  // Check if content is overflowing and switch to vertical layout if needed
  const checkOverflow = () => {
    const buttons = tabsNav.querySelectorAll(".tab-button");
    let hasOverflow = false;

    // Calculate minimum width needed for horizontal layout
    const containerWidth = tabsNav.offsetWidth;
    const buttonCount = buttons.length;
    const minWidthPerButton = 120; // Minimum width needed per button in horizontal mode
    const totalMinWidth = buttonCount * minWidthPerButton;

    // Check if we have enough space OR if any label is overflowing
    if (containerWidth < totalMinWidth) {
      hasOverflow = true;
    } else {
      buttons.forEach((btn) => {
        const label = btn.querySelector(".tab-label");
        if (label && label.scrollWidth > label.clientWidth + 2) {
          hasOverflow = true;
        }
      });
    }

    // If content is overflowing, switch to vertical layout (icon on top)
    if (hasOverflow) {
      buttons.forEach((btn) => {
        btn.style.flexDirection = "column";
        btn.style.gap = "4px";
        btn.style.fontSize = "13px";
        btn.style.fontWeight = "400";
        btn.style.padding = "10px 8px";

        const icon = btn.querySelector(".tab-icon");
        if (icon) {
          icon.style.fontSize = "20px";
        }

        const label = btn.querySelector(".tab-label");
        if (label) {
          label.style.fontSize = "12px";
          label.style.whiteSpace = "normal";
          label.style.textAlign = "center";
          label.style.lineHeight = "1.2";
          label.style.paddingLeft = "0";
          label.style.paddingRight = "0";
        }
      });
    } else {
      buttons.forEach((btn) => {
        btn.style.flexDirection = "row";
        btn.style.gap = "8px";
        btn.style.fontSize = "16px";
        btn.style.fontWeight = "600";
        btn.style.padding = "12px 8px";

        const icon = btn.querySelector(".tab-icon");
        if (icon) {
          icon.style.fontSize = "inherit";
        }

        const label = btn.querySelector(".tab-label");
        if (label) {
          label.style.fontSize = "inherit";
          label.style.whiteSpace = "nowrap";
          label.style.textAlign = "initial";
          label.style.lineHeight = "inherit";
          label.style.paddingLeft = "0";
          label.style.paddingRight = "0";
          label.style.overflow = "visible";
          label.style.textOverflow = "clip";
        }
      });
    }
  };

  // Check on load and resize with a slight delay to ensure rendering is complete
  setTimeout(checkOverflow, 100);
  setTimeout(checkOverflow, 300); // Double check after layout settles
  window.addEventListener("resize", () => {
    setTimeout(checkOverflow, 50);
  });

  // Tab contents container
  const tabContents = document.createElement("div");
  tabContents.className = "tabs-content";

  // Create content divs for each tab
  tabs.forEach((tab, index) => {
    const contentDiv = document.createElement("div");
    contentDiv.className = "tab-content";
    contentDiv.id = `content-${tab.id}`;
    contentDiv.style.display = index === 0 ? "block" : "none"; // Show first tab by default

    // Placeholder content (to be filled with actual data)
    contentDiv.innerHTML = `<p>Content for ${tab.label} tab</p>`;

    tabContents.appendChild(contentDiv);
  });

  viewDiv.appendChild(tabContents);

  return viewDiv;
}

// Export for usage
window.tournamentTabsView = tournamentTabsView;
