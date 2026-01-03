/**
 * Splash Screen Component
 * Displays a beautiful splash screen with the app branding
 */
function splashScreenView() {
  const container = document.createElement("div");
  container.id = "splashScreen";
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-teal);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow: hidden;
  `;

  // Main content wrapper
  const content = document.createElement("div");
  content.style.cssText = `
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 var(--space-32);
    text-align: center;
    font-family: var(--font-main);
  `;

  // Icon container
  const iconContainer = document.createElement("div");
  iconContainer.style.cssText = `
    position: relative;
    margin-bottom: var(--space-32);
  `;

  // Circular badge with football icon
  const iconBadge = document.createElement("div");
  iconBadge.style.cssText = `
    width: 128px;
    height: 128px;
    background-color: var(--beige);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: var(--space-24);
  `;

  // Football icon image
  const footballIcon = document.createElement("img");
  footballIcon.src = "assets/football-icon.png";
  footballIcon.alt = "Football player";
  footballIcon.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  iconBadge.appendChild(footballIcon);
  iconContainer.appendChild(iconBadge);
  content.appendChild(iconContainer);

  // Title - Line 1
  const title1 = document.createElement("div");
  title1.textContent = "South Pune";
  title1.style.cssText = `
    color: var(--beige);
    font-size: 3em;
    font-weight: 600;
    margin-bottom: var(--space-8);
    letter-spacing: -0.5px;
    background: none;
    background-color: transparent;
  `;

  // Title - Line 2
  const title2 = document.createElement("div");
  title2.textContent = "Football Community";
  title2.style.cssText = `
    color: var(--beige);
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: none;
    background-color: transparent;
  `;

  content.appendChild(title1);
  content.appendChild(title2);
  container.appendChild(content);

  // Bottom accent line
  const accentLine = document.createElement("div");
  accentLine.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, transparent, var(--air-force-blue), transparent);
  `;

  container.appendChild(accentLine);

  return container;
}

/**
 * Show the splash screen
 * @param {number} duration - Duration in milliseconds (default: 2000ms)
 * @returns {Promise} - Resolves when splash screen is hidden
 */
function showSplashScreen(duration = 2000) {
  return new Promise((resolve) => {
    const splash = splashScreenView();
    document.body.appendChild(splash);

    // Fade out and remove after duration
    setTimeout(() => {
      splash.style.transition = "opacity 0.5s ease-out";
      splash.style.opacity = "0";

      setTimeout(() => {
        splash.remove();
        resolve();
      }, 500);
    }, duration);
  });
}

/**
 * Hide the splash screen immediately
 */
function hideSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (splash) {
    splash.style.transition = "opacity 0.3s ease-out";
    splash.style.opacity = "0";

    setTimeout(() => {
      splash.remove();
    }, 300);
  }
}
