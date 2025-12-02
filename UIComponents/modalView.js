// modalView.js
// Reusable Modal Component

/**
 * Creates a reusable modal component
 * @param {Object} config - Modal configuration
 * @param {string} config.id - Modal element ID
 * @param {string} config.icon - Emoji icon for the title
 * @param {string} config.title - Modal title text
 * @param {string} config.description - Description text
 * @param {string} config.content - HTML content for the modal body
 * @param {string} config.buttonText - Primary button text
 * @param {string} config.buttonOnClick - Primary button click handler function name
 * @param {string} config.closeHandler - Close button handler function name
 * @returns {HTMLElement} - The created modal element
 */
function modalView(config) {
  const {
    id,
    icon,
    title,
    description,
    content,
    buttonText,
    buttonOnClick,
    closeHandler,
  } = config;
  
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = id;
  
  modal.innerHTML = `
    <div class="modal-content" style="position: relative">
      <div style="display: flex; align-items: center; margin-bottom: 16px">
        <h2 style="margin: 0; color: #667eea; flex: 1; word-break: break-word">
          ${icon} ${title}
        </h2>
        <button onclick="${closeHandler}()" style="background: none; border: none; font-size: 24px; color: #333; cursor: pointer; font-weight: bold; line-height: 1; padding: 0;">✕</button>
      </div>
      <p style="margin-bottom: 16px; color: #666">
        ${description}
      </p>
      ${content}
      <button class="btn-success" style="flex: 1; width: 100%; padding: 16px 40px; font-size: 18px" onclick="${buttonOnClick}()">${buttonText}</button>
    </div>
  `;
  
  document.body.appendChild(modal);
  return modal;
}

// Export for usage
window.modalView = modalView;
