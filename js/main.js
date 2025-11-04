// RapidTools - Main JavaScript Functions

// Search functionality
function initSearch() {
    const searchBox = document.getElementById('searchBox');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchBox && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    if (!query) return;
    
    // Simple search - redirect to tool if found
    const tools = {
        'binary': '/tools/binary-converter.html',
        'decimal': '/tools/binary-converter.html',
        'hex': '/tools/binary-converter.html',
        'temperature': '/tools/temperature-converter.html',
        'celsius': '/tools/temperature-converter.html',
        'fahrenheit': '/tools/temperature-converter.html',
        'percentage': '/tools/percentage-calculator.html',
        'percent': '/tools/percentage-calculator.html',
        'bmi': '/tools/bmi-calculator.html',
        'age': '/tools/age-calculator.html',
        'interest': '/tools/simple-interest-calculator.html',
        'text': '/tools/text-binary-converter.html',
        'unit': '/tools/unit-converter.html',
        'length': '/tools/unit-converter.html',
        'weight': '/tools/unit-converter.html',
        'mass': '/tools/unit-converter.html'
    };
    
    for (let key in tools) {
        if (query.includes(key)) {
            window.location.href = tools[key];
            return;
        }
    }
    
    alert('Tool not found. Please browse our categories below.');
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Copied to clipboard!', 'success');
    }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copied to clipboard!', 'success');
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Input validation helpers
function validateNumber(value, min = null, max = null) {
    const num = parseFloat(value);
    if (isNaN(num)) return false;
    if (min !== null && num < min) return false;
    if (max !== null && num > max) return false;
    return true;
}

function formatNumber(num, decimals = 2) {
    return parseFloat(num).toFixed(decimals).replace(/\.?0+$/, '');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Google Analytics (placeholder)
function gtag() {
    dataLayer.push(arguments);
}

// AdSense initialization (placeholder)
function initAds() {
    // AdSense code will be inserted here
    console.log('AdSense initialized');
}