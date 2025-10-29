// Utility Functions
class Utils {
    // Generate unique tournament ID
    static generateTournamentId() {
        return 'tournament_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Get tournament ID from URL
    static getTournamentIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('tournament');
    }

    // Generate shareable tournament link
    static getTournamentShareLink(tournamentId) {
        const baseUrl = window.location.href.split('?')[0];
        return `${baseUrl}?tournament=${tournamentId}`;
    }

    // Format time in MM:SS
    static formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Format date
    static formatDate(date) {
        return date.toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
        });
    }

    // Deep clone an object
    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Show/hide element
    static show(elementId) {
        const el = document.getElementById(elementId);
        if (el) el.classList.remove('hidden');
    }

    static hide(elementId) {
        const el = document.getElementById(elementId);
        if (el) el.classList.add('hidden');
    }

    // Copy text to clipboard
    static async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch(e) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        }
    }
}
