// UIComponents/headerView.js
// Reusable header view for Football Tournament Manager

/**
 * Creates a header view element with horizontal layout:
 * [⚽] [Football Tournament Manager] [⚽]
 * Title is centered, supports up to 2 lines.
 * Vertical alignment is center.
 *
 * Usage: headerView()
 * Returns: HTMLElement
 */
function headerView() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";
  container.style.width = "100%";
  container.style.margin = "16px 0";
  container.style.padding = "0 16px";

  // Left spacer for centering
  const leftSpacer = document.createElement("div");
  leftSpacer.style.flex = "1";

  // Left football icon
  const leftIcon = document.createElement("span");
  leftIcon.textContent = "⚽";
  leftIcon.style.fontSize = "1.5rem";
  leftIcon.style.marginRight = "16px";

  // Title
  const title = document.createElement("div");
  title.textContent = "Football Tournament Manager";
  title.style.fontWeight = "bold";
  title.style.fontSize = "1.5rem";
  title.style.textAlign = "center";
  title.style.lineHeight = "1.3";
  title.style.wordBreak = "keep-all"; // Prevent word breaking
  title.style.overflowWrap = "normal"; // Don't break words
  title.style.whiteSpace = "normal"; // Allow wrapping
  title.style.maxWidth = "fit-content";

  // Support up to 3 lines
  title.style.display = "-webkit-box";
  title.style.webkitLineClamp = "3";
  title.style.webkitBoxOrient = "vertical";
  title.style.overflow = "hidden";

  // Dynamic font sizing for mobile
  const adjustFontSize = () => {
    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - 150; // Account for icons, margins, and spacers

    // Reset to base font size
    let fontSize = 24; // 1.5rem = 24px
    title.style.fontSize = fontSize + "px";

    // Check if text height exceeds 3 lines, then reduce font
    const maxHeight = fontSize * 1.3 * 3; // lineHeight * 3 lines

    while (title.scrollHeight > maxHeight && fontSize > 12) {
      // 50% of 24px = 12px
      fontSize -= 1;
      title.style.fontSize = fontSize + "px";
    }
  };

  // Adjust font size after element is added to DOM
  setTimeout(adjustFontSize, 10);

  // Right football icon
  const rightIcon = document.createElement("span");
  rightIcon.textContent = "⚽";
  rightIcon.style.fontSize = "1.5rem";
  rightIcon.style.marginLeft = "16px";

  // Right spacer for centering
  const rightSpacer = document.createElement("div");
  rightSpacer.style.flex = "1";

  container.appendChild(leftSpacer);
  container.appendChild(leftIcon);
  container.appendChild(title);
  container.appendChild(rightIcon);
  container.appendChild(rightSpacer);

  // Add resize listener for dynamic font adjustment
  window.addEventListener("resize", () => {
    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - 150; // Account for icons, margins, and spacers

    // Reset to base font size
    let fontSize = 24; // 1.5rem = 24px
    title.style.fontSize = fontSize + "px";

    // Check if text height exceeds 3 lines, then reduce font
    const maxHeight = fontSize * 1.3 * 3; // lineHeight * 3 lines

    while (title.scrollHeight > maxHeight && fontSize > 12) {
      // 50% of 24px = 12px
      fontSize -= 1;
      title.style.fontSize = fontSize + "px";
    }
  });

  return container;
}

// Export for usage in other files
window.headerView = headerView;
