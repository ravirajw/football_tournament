// UIComponents/pointsTableView.js
// Modular Points Table View component

/**
 * Creates a points table view with table, tiebreaker info, and qualification note
 * Uses containerView for consistent styling
 * @returns {HTMLElement}
 */
function pointsTableView() {
  // Create the table element
  const table = document.createElement("table");
  table.className = "points-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Pos</th>
        <th>Team</th>
        <th>P</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>CS</th>
        <th>Pts</th>
      </tr>
    </thead>
    <tbody id="tableBody"></tbody>
  `;

  // Create tiebreaker info
  const tiebreakerInfo = document.createElement("div");
  tiebreakerInfo.style.marginTop = "16px";
  tiebreakerInfo.style.fontSize = "0.85em";
  tiebreakerInfo.style.color = "#666";
  tiebreakerInfo.innerHTML = `
    <strong>* Tiebreaker Order:</strong> 1. Points, 2. Goal Difference
    (GD), 3. Head-to-Head (H2H), 4. Goals Scored (GF), 5. Clean Sheets
    (CS)
  `;

  // Create qualification note
  const qualificationNote = document.createElement("div");
  qualificationNote.id = "qualificationNote";
  qualificationNote.style.marginTop = "16px";
  qualificationNote.style.padding = "16px";
  qualificationNote.style.background = "#e7f3ff";
  qualificationNote.style.borderLeft = "4px solid #2196f3";
  qualificationNote.style.borderRadius = "4px";
  qualificationNote.style.fontSize = "0.85em";
  qualificationNote.style.display = "none";
  qualificationNote.innerHTML = `
    <strong style="color: #1976d2">📋 Final Qualification:</strong>
    <div
      id="qualificationDetails"
      style="margin-top: 8px; color: #555"
    ></div>
  `;

  // Use containerView to wrap the content
  const container = containerView({
    title: "Points Table",
    content: [table, tiebreakerInfo, qualificationNote],
  });

  // Add the section class and id to the container
  container.className = "section";
  container.id = "tableSection";

  return container;
}

// Export for usage
window.pointsTableView = pointsTableView;
