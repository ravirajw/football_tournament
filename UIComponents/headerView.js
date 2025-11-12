// UIComponents/headerView.js
// Reusable header view for Football Tournament Manager

/**
 * Creates a header view element with horizontal layout:
 * [leftEmoji] [title] [rightEmoji]
 * Title is centered, wraps to multiple lines as needed.
 * Prioritizes text wrapping over font size reduction.
 * Vertical alignment is center.
 *
 * @param {Object} options - Configuration options
 * @param {string} options.leftEmoji - Left emoji icon (default: "⚽")
 * @param {string} options.title - Header title text (default: "Football Tournament Manager")
 * @param {string} options.rightEmoji - Right emoji icon (default: "⚽")
 * @param {number} options.fontSize - Base font size in pixels (default: 24)
 * @param {string} options.textColor - Text color (default: "#000")
 * @param {string} options.textShadow - Text shadow CSS value (default: "none")
 * @param {string} options.letterSpacing - Letter spacing (default: "normal")
 * @param {string} options.fontWeight - Font weight (default: "bold")
 * @param {string} options.fontStyle - Font style (default: "normal")
 * @param {string} options.opacity - Opacity (default: "1")
 *
 * Usage: headerView({ leftEmoji: "🏆", title: "Winner", rightEmoji: "🏆", fontSize: 24, textColor: "#ff0000" })
 * Returns: HTMLElement
 */
function headerView(options = {}) {
  // Destructure options with defaults
  const {
    leftEmoji = "⚽",
    title: titleText = "Football Tournament Manager",
    rightEmoji = "⚽",
    fontSize: baseFontSize = 24,
    textColor = "#000",
    textShadow = "none",
    letterSpacing = "normal",
    fontWeight = "bold",
    fontStyle = "normal",
    opacity = "1",
  } = options;

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

  // Left icon
  const leftIcon = document.createElement("span");
  leftIcon.textContent = leftEmoji;
  leftIcon.style.fontSize = baseFontSize + "px";
  leftIcon.style.marginRight = "16px";

  // Title
  const title = document.createElement("div");
  title.textContent = titleText;
  title.style.fontWeight = fontWeight;
  title.style.fontSize = baseFontSize + "px";
  title.style.textAlign = "center";
  title.style.lineHeight = "1.3";
  title.style.wordBreak = "keep-all"; // Prevent word breaking
  title.style.overflowWrap = "normal"; // Don't break words
  title.style.whiteSpace = "normal"; // Allow wrapping at whitespace only
  title.style.maxWidth = "100%"; // Allow full width
  title.style.color = textColor;
  title.style.textShadow = textShadow;
  title.style.letterSpacing = letterSpacing;
  title.style.fontStyle = fontStyle;
  title.style.opacity = opacity;

  // Dynamic font sizing for mobile - prioritize wrapping over shrinking
  const adjustFontSize = () => {
    const containerWidth = container.offsetWidth;
    const availableWidth = containerWidth - 150; // Account for icons, margins, and spacers

    // Reset to base font size
    let fontSize = baseFontSize;
    title.style.fontSize = fontSize + "px";

    // Set max width to allow wrapping first
    title.style.maxWidth = availableWidth + "px";

    // Only reduce font size if text still doesn't fit after wrapping
    const minFontSize = baseFontSize * 0.5; // Minimum 50% of base font size

    while (title.scrollWidth > availableWidth && fontSize > minFontSize) {
      fontSize -= 1;
      title.style.fontSize = fontSize + "px";
    }
  };

  // Adjust font size after element is added to DOM
  setTimeout(adjustFontSize, 10);

  // Right icon
  const rightIcon = document.createElement("span");
  rightIcon.textContent = rightEmoji;
  rightIcon.style.fontSize = baseFontSize + "px";
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
    let fontSize = baseFontSize;
    title.style.fontSize = fontSize + "px";

    // Set max width to allow wrapping first
    title.style.maxWidth = availableWidth + "px";

    // Only reduce font size if text still doesn't fit after wrapping
    const minFontSize = baseFontSize * 0.5; // Minimum 50% of base font size

    while (title.scrollWidth > availableWidth && fontSize > minFontSize) {
      fontSize -= 1;
      title.style.fontSize = fontSize + "px";
    }
  });

  return container;
}

// Export for usage in other files
window.headerView = headerView;
