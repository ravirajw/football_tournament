// UIComponents/pointsTableView.js
// Modular Points Table View component with proper overflow containment

/**
 * Creates a points table view with table, tiebreaker info, and qualification note
 * Uses containerView for consistent styling with proper overflow handling
 * @returns {HTMLElement}
 */
function pointsTableView() {
  // Create a wrapper div for the table with horizontal scroll
  const tableScrollWrapper = document.createElement("div");
  tableScrollWrapper.style.width = "100%";
  tableScrollWrapper.style.overflowX = "auto";
  tableScrollWrapper.style.overflowY = "hidden";
  tableScrollWrapper.style.WebkitOverflowScrolling = "touch";
  tableScrollWrapper.style.boxSizing = "border-box";

  // Create the table element
  const table = document.createElement("table");
  table.className = "points-table";
  table.style.minWidth = "500px";
  table.style.margin = "0";
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

  tableScrollWrapper.appendChild(table);

  // Create tiebreaker info
  const tiebreakerInfo = document.createElement("div");
  tiebreakerInfo.style.marginTop = "16px";
  tiebreakerInfo.style.fontSize = "0.85em";
  tiebreakerInfo.style.color = "#666";
  tiebreakerInfo.style.wordWrap = "break-word";
  tiebreakerInfo.style.width = "100%";
  tiebreakerInfo.style.boxSizing = "border-box";
  tiebreakerInfo.innerHTML = `
    <strong>* Tiebreaker Order:</strong><br><br>
    1. Points<br>
    2. Goal Difference (GD)<br>
    3. Head-to-Head (H2H)<br>
    4. Goals Scored (GF)<br>
    5. Clean Sheets (CS)
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
  qualificationNote.style.wordWrap = "break-word";
  qualificationNote.style.width = "100%";
  qualificationNote.style.boxSizing = "border-box";
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
    content: [tableScrollWrapper, tiebreakerInfo, qualificationNote],
  });

  // Add the section class and id to the container
  container.className = "section";
  container.id = "tableSection";

  // Ensure the container itself has proper overflow
  container.style.overflow = "hidden";
  container.style.width = "100%";
  container.style.boxSizing = "border-box";

  return container;
}

// Export for usage
window.pointsTableView = pointsTableView;
