// UIComponents/whatsappMessageView.js
// Modular WhatsApp Message View component

/**
 * Creates a WhatsApp-style message view with title, message box, and copy button
 * @param {Object} options
 * @param {string} options.icon - The icon to display in the heading/title
 * @param {string} options.title - The heading/title to display
 * @param {string} options.subtitle - Optional subtitle/description to display below title
 * @param {string} options.message - The message to show in the white box
 * @param {string} options.buttonTitle - The label for the copy button
 * @param {string} options.containerId - Optional ID for the container div
 * @returns {HTMLElement}
 */
function whatsappMessageView({
  icon,
  title,
  subtitle,
  message,
  buttonTitle,
  containerId,
}) {
  // Outer container
  const container = document.createElement("div");
  container.className = "whatsapp-message-box";
  if (containerId) {
    container.id = containerId;
  }

  // Title
  const heading = document.createElement("h3");
  heading.innerHTML = `<span style="font-size: 1.5em">${icon}</span> ${title}`;
  container.appendChild(heading);

  // Subtitle (optional)
  if (subtitle) {
    const subtitlePara = document.createElement("p");
    subtitlePara.style.cssText = "margin: 5px 0 10px 0; color: #666;";
    subtitlePara.textContent = subtitle;
    container.appendChild(subtitlePara);
  }

  // Message box
  const messageBox = document.createElement("div");
  messageBox.className = "message-content";
  messageBox.textContent = message;
  container.appendChild(messageBox);

  // Copy button
  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.textContent = buttonTitle;
  copyBtn.onclick = () => {
    navigator.clipboard
      .writeText(message)
      .then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✅ Copied!";
        copyBtn.style.background = "#128c7e";
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = "#25d366";
        }, 2000);
      })
      .catch(() => {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = message;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✅ Copied!";
        copyBtn.style.background = "#128c7e";
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = "#25d366";
        }, 2000);
      });
  };
  container.appendChild(copyBtn);

  return container;
}

// Export for usage
window.whatsappMessageView = whatsappMessageView;
