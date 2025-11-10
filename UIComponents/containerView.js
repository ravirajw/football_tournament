// UIComponents/containerView.js
// Dynamic container view for sections like Team Setup

/**
 * Creates a dynamic container view with title, separator, and content.
 * @param {Object} options
 * @param {string} options.title - Title text for the container
 * @param {HTMLElement|HTMLElement[]} options.content - Main content (single element or array)
 * @returns {HTMLElement}
 */
function containerView({ title, content }) {
  const container = document.createElement("div");
  container.style.borderRadius = "16px";
  container.style.padding = "16px";
  container.style.background = "#eceff1";
  container.style.boxSizing = "border-box";
  container.style.margin = "16px 0";
  container.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.1)";
  container.style.overflow = "hidden"; // Prevent content from bleeding outside

  // Title
  const titleElem = document.createElement("div");
  titleElem.textContent = title;
  titleElem.style.fontWeight = "bold";
  titleElem.style.fontSize = "1.5em";
  titleElem.style.color = "#667eea";
  titleElem.style.marginBottom = "8px";

  // Separator line
  const separator = document.createElement("div");
  separator.style.height = "2px";
  separator.style.background = "#667eea";
  separator.style.borderRadius = "1px";
  separator.style.marginBottom = "16px";

  // Main content
  const contentElem = document.createElement("div");
  contentElem.style.width = "100%";
  contentElem.style.boxSizing = "border-box";
  contentElem.style.overflow = "hidden";
  if (Array.isArray(content)) {
    content.forEach((child) => contentElem.appendChild(child));
  } else if (content instanceof HTMLElement) {
    contentElem.appendChild(content);
  }

  container.appendChild(titleElem);
  container.appendChild(separator);
  container.appendChild(contentElem);

  return container;
}

// Export for usage in other files
window.containerView = containerView;
