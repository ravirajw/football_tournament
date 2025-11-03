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

    // ===== NULL SAFETY UTILITIES =====

    /**
     * Safely get an element by ID with null checking
     * @param {string} id - Element ID
     * @param {function} onError - Optional callback if element not found
     * @returns {HTMLElement|null} - The element or null
     */
    static safeGetElement(id, onError = null) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`⚠️ Element not found: #${id}`);
            if (onError) onError();
        }
        return element;
    }

    /**
     * Safely set text content of an element
     * @param {string} id - Element ID
     * @param {string} text - Text to set
     * @returns {boolean} - Success status
     */
    static safeSetText(id, text) {
        const element = Utils.safeGetElement(id);
        if (element) {
            element.textContent = text;
            return true;
        }
        return false;
    }

    /**
     * Safely set HTML content of an element
     * @param {string} id - Element ID
     * @param {string} html - HTML to set
     * @returns {boolean} - Success status
     */
    static safeSetHTML(id, html) {
        const element = Utils.safeGetElement(id);
        if (element) {
            element.innerHTML = html;
            return true;
        }
        return false;
    }

    /**
     * Safely set style property of an element
     * @param {string} id - Element ID
     * @param {string} property - Style property name
     * @param {string} value - Style value
     * @returns {boolean} - Success status
     */
    static safeSetStyle(id, property, value) {
        const element = Utils.safeGetElement(id);
        if (element && element.style) {
            element.style[property] = value;
            return true;
        }
        return false;
    }

    /**
     * Safely get value from an input element
     * @param {string} id - Element ID
     * @param {string} defaultValue - Default value if element not found
     * @returns {string} - Element value or default
     */
    static safeGetValue(id, defaultValue = '') {
        const element = Utils.safeGetElement(id);
        return element && element.value !== undefined ? element.value : defaultValue;
    }

    /**
     * Safely save to localStorage with quota error handling
     * @param {string} key - Storage key
     * @param {any} data - Data to store (will be JSON stringified)
     * @returns {boolean} - Success status
     */
    static safeSaveToLocalStorage(key, data) {
        try {
            const jsonString = JSON.stringify(data);
            localStorage.setItem(key, jsonString);
            return true;
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                console.error('❌ LocalStorage quota exceeded');
                alert('Storage is full. Some data may not be saved.');
            } else {
                console.error('❌ Error saving to localStorage:', e);
            }
            return false;
        }
    }

    /**
     * Safely load from localStorage with error handling
     * @param {string} key - Storage key
     * @param {any} defaultValue - Default value if not found or error
     * @returns {any} - Parsed data or default value
     */
    static safeLoadFromLocalStorage(key, defaultValue = null) {
        try {
            const stored = localStorage.getItem(key);
            if (stored) {
                return JSON.parse(stored);
            }
            return defaultValue;
        } catch (e) {
            console.error('❌ Error loading from localStorage:', e);
            return defaultValue;
        }
    }

    /**
     * Safely execute async Firebase operation with error handling
     * @param {function} operation - Async function to execute
     * @param {string} operationName - Name for logging
     * @param {any} fallbackValue - Value to return on error
     * @returns {Promise<any>} - Result or fallback value
     */
    static async safeFirebaseOperation(operation, operationName, fallbackValue = null) {
        try {
            return await operation();
        } catch (e) {
            console.error(`❌ Firebase ${operationName} failed:`, e);
            if (e.code === 'permission-denied') {
                console.warn('⚠️ Firebase permission denied');
            } else if (e.code === 'unavailable') {
                console.warn('⚠️ Firebase network unavailable');
            }
            return fallbackValue;
        }
    }
}
