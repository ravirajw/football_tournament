/**
 * Splash Screen Component
 * Displays a beautiful splash screen with the app branding
 * 
 * USAGE:
 * 1. Timed: 
 *    await showSplashScreen(2000); 
 *    // Automatically fades out after 2 seconds.
 * 
 * 2. Manual Control:
 *    await showSplashScreen(); // Show for unlimited time
 *    await initializeApp();    // Do your loading logic
 *    hideSplashScreen();       // Manually hide it when done
 * 
 * View Hierarchy:
 * Container -> Content -> IconBadge, Title1, Title2
 * IconBadge -> FootballIcon
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
    background-color: var(--ink-black);
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

  // Football icon image
  const footballIcon = document.createElement("img");
  footballIcon.src = "assets/football-icon.png";
  footballIcon.alt = "Football player";
  footballIcon.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  // Circle containing the football icon
  const iconBadge = document.createElement("div");
  iconBadge.style.cssText = `
    width: 96px;
    height: 96px;
    background-color: var(--beige);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-24);
    margin-bottom: var(--space-48);
  `;
  iconBadge.appendChild(footballIcon);

  // Title - Line 1
  const title1 = document.createElement("div");
  title1.textContent = "South Pune";
  title1.style.cssText = `
    color: var(--beige);
    font-size: 2em;
    font-weight: 600;
    margin-bottom: var(--space-16);
    letter-spacing: 1px;
    background: none;
    background-color: transparent;
  `;

  // Title - Line 2
  const title2 = document.createElement("div");
  title2.textContent = "Football Community";
  title2.style.cssText = `
    color: var(--beige);
    font-size: 1.5em;
    letter-spacing: 1px;
    background: none;
    background-color: transparent;
  `;

  content.appendChild(iconBadge);
  content.appendChild(title1);
  content.appendChild(title2);
  container.appendChild(content);

  return container;
}

/**
 * Show the splash screen
 * @param {number} duration - Optional duration in milliseconds. If omitted, screen stays until hideSplashScreen() is called.
 * @returns {Promise} - Resolves immediately if manual, or after fade-out if timed.
 * 
 * The app currently uses a fixed duration.
 * Once called, it manages the entire lifecycle (show → wait → fade → remove).
 * 
 * // index.html
 * await showSplashScreen(2000); // Wait 2 seconds, then it deletes itself
 */
function showSplashScreen(duration = null) {
  return new Promise((resolve) => {
    const splash = splashScreenView();
    document.body.appendChild(splash);

    // If no duration provided, resolve immediately so the app can continue initializing
    if (!duration) {
      resolve();
      return;
    }

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
 * Method to hide the splash screen manually.
 * 
 * Can be used in following case:
 * If you had a heavy app initialization (e.g., loading a database or checking auth)
 * and didn't know exactly how long it would take, you would use manual control instead like this:
 * 
 * showSplashScreen(); // Show it (no duration passed)
 * await initializeApp(); // Wait for actual loading
 * hideSplashScreen(); // Manually hide it when ready
 */
function hideSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (splash) {
    splash.style.transition = "opacity 0.5s ease-out";
    splash.style.opacity = "0";

    setTimeout(() => {
      splash.remove();
    }, 500);
  }
}
