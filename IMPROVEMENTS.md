# Code Refactoring & Improvements Plan

## Pending Improvements

- Remove unused variables and code after manual verification and thorough testing
- Add null safety for Firebase connection errors, LocalStorage quota exceeded, and network failures during sync
- Add input validation for team names (empty strings), player names (duplicates, special characters), and score inputs (negative numbers)
- Reduce setInterval usage by combining related intervals and using requestAnimationFrame for UI updates
- Optimize Firebase listeners: centralize management, ensure cleanup, use single listener with smart filtering
- Create utility functions in `js/utils.js` (e.g., formatTime, generateTournamentId, safeGetElement, date/time formatting helpers)
- Extract CSS from `<style>` tags to separate file for better organization and caching
- Add loading states for Firebase operations, tournament loading, and match updates (spinners, disabled buttons, progress indicators)
- Add confirmation dialogs for delete tournament, start match, and end tournament actions
- Improve mobile responsiveness for points table, match cards layout, admin controls, and modal dialogs
