// js/tournamentSummary.js
// Pure function to generate tournament summary message

function generateTournamentSummaryMessage({ matches, teams, standings, playerStats, keeperStats, tournamentDate, currentTournamentId, getTournamentShareLink, generateLeaderboardStats }) {
    // Get the final match
    const finalMatch = matches.find(m => m.round === 'final');
    if (!finalMatch || finalMatch.status !== 'completed') return '';

    const winner = finalMatch.score1 > finalMatch.score2 ? finalMatch.team1 : finalMatch.team2;
    const stats = generateLeaderboardStats();
    const shareLink = getTournamentShareLink(currentTournamentId);

    let message = `🏆 *FOOTBALL TOURNAMENT RESULTS* 🏆\n\n`;
    message += `📅 *Date:* ${tournamentDate}\n\n`;
    message += `━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `🏆 *CHAMPION*\n`;
    message += `👑 ${teams[winner].name.toUpperCase()} 👑\n\n`;
    
    message += `━━━━━━━━━━━━━━━━━\n\n`;
    
    // Individual Awards
    message += `🏅 *INDIVIDUAL AWARDS*\n\n`;
    
    if (stats.topScorers.length > 0) {
        message += `⚽ *TOP SCORER${stats.topScorers.length > 1 ? 'S' : ''}*\n`;
        stats.topScorers.forEach(p => {
            message += `🥇 ${p.name} (${teams[p.team].name}) - ${p.goals} goal${p.goals > 1 ? 's' : ''}\n`;
        });
        message += `\n`;
    }
    
    if (stats.topAssisters.length > 0) {
        message += `🎯 *TOP ASSIST${stats.topAssisters.length > 1 ? 'S' : ''}*\n`;
        stats.topAssisters.forEach(p => {
            message += `🥇 ${p.name} (${teams[p.team].name}) - ${p.assists} assist${p.assists > 1 ? 's' : ''}\n`;
        });
        message += `\n`;
    }
    
    if (stats.topKeepers.length > 0) {
        message += `🧤 *BEST GOALKEEPER${stats.topKeepers.length > 1 ? 'S' : ''}*\n`;
        stats.topKeepers.forEach(k => {
            message += `🥇 ${k.name} (${teams[k.team].name}) - ${k.saves} save${k.saves > 1 ? 's' : ''}\n`;
        });
        message += `\n`;
    }
    
    if (stats.ownGoalScorers.length > 0) {
        message += `😬 *OWN GOAL${stats.ownGoalScorers.length > 1 ? 'S' : ''}*\n`;
        stats.ownGoalScorers.forEach(p => {
            message += `• ${p.name} (${teams[p.team].name}) - ${p.ownGoals}\n`;
        });
        message += `\n`;
    }
    
    message += `━━━━━━━━━━━━━━━━━\n\n`;
    
    // Team Awards
    message += `🏆 *TEAM AWARDS*\n\n`;
    
    message += `🔥 *BEST ATTACK - MOST GOALS SCORED*\n`;
    stats.bestAttack.forEach(t => {
        message += `${teams[t.key].name} - ${t.gf} goals\n`;
    });
    message += `\n`;
    
    message += `🛡️ *BEST DEFENSE - LEAST GOALS CONCEDED*\n`;
    stats.bestDefense.forEach(t => {
        message += `${teams[t.key].name} - ${t.ga} goals conceded\n`;
    });
    message += `\n`;
    
    message += `🧤 *MOST CLEAN SHEETS*\n`;
    stats.mostCleanSheets.forEach(t => {
        message += `${teams[t.key].name} - ${t.cs} clean sheets\n`;
    });
    message += `\n`;
    
    message += `━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `🔗 *View Full Tournament*\n`;
    message += `${shareLink}\n\n`;
    
    message += `━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `Thanks for participating! 🎉`;

    return message;
}

// Export for usage in index.html
window.generateTournamentSummaryMessage = generateTournamentSummaryMessage;
