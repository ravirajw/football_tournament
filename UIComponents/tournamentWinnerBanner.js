// tournamentWinnerBanner.js
// Tournament Winner Banner Component - Mobile Responsive

/**
 * Creates a tournament winner banner with responsive design
 * @param {Object} options - Configuration options
 * @param {string} options.winnerName - Name of the winning team
 * @param {string} options.winnerColor - Color of the winning team
 * @returns {HTMLElement} - Winner banner element
 */
function createTournamentWinnerBanner({ winnerName, winnerColor }) {
  const banner = document.createElement("div");
  banner.id = "winnerSection";
  banner.style.cssText = `
    background: linear-gradient(135deg, #f4d03f 0%, #f39c12 100%);
    color: #333;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(244, 208, 63, 0.4);
  `;

  banner.innerHTML = `
    <style>
      .winner-banner-title {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0 0 15px 0;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      
      .winner-banner-team {
        font-size: 2em;
        margin: 20px 0;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        color: ${winnerColor};
        word-break: break-word;
      }
      
      .winner-banner-congrats {
        font-size: 1.1em;
        opacity: 0.9;
      }

      /* Mobile responsive adjustments */
      @media (max-width: 480px) {
        .winner-banner-title {
          font-size: 1.2em;
          gap: 5px;
        }
        
        .winner-banner-team {
          font-size: 1.8em;
          margin: 15px 0;
        }
        
        .winner-banner-congrats {
          font-size: 1em;
        }
      }

      @media (max-width: 360px) {
        .winner-banner-title {
          font-size: 1em;
        }
        
        .winner-banner-team {
          font-size: 1.5em;
        }
        
        .winner-banner-congrats {
          font-size: 0.9em;
        }
      }
    </style>
    
    <div class="winner-banner-title">
      <span>🏆</span>
      <span>TOURNAMENT WINNER</span>
      <span>🏆</span>
    </div>
    <div class="winner-banner-team">
      ${winnerName.toUpperCase()} TEAM
    </div>
    <div class="winner-banner-congrats">
      🎉 Congratulations! 🎉
    </div>
  `;

  return banner;
}

// Export for usage
window.createTournamentWinnerBanner = createTournamentWinnerBanner;
