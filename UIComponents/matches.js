// UIComponents/matches.js
// Component for displaying the matches grid

/**
 * Creates the matches view component
 * Uses containerView for consistent styling
 * @returns {HTMLElement}
 */
function matchesView() {
    // Create the matches grid container
    const matchesGrid = document.createElement("div");
    matchesGrid.className = "matches-grid";
    matchesGrid.id = "matchesGrid";

    // Use containerView to wrap the content
    const container = containerView({
        title: "Matches",
        content: matchesGrid,
    });

    // Add the section class and id to the container for backward compatibility
    container.className = "section";
    container.id = "matchesSection";

    return container;
}

// Export for usage
window.matchesView = matchesView;
