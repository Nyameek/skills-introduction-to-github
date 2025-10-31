// Counter functionality
let count = 0;

// Get DOM elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Increment counter
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
    animateButton(incrementBtn);
});

// Reset counter
resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
    animateButton(resetBtn);
});

// Update the display
function updateDisplay() {
    countDisplay.textContent = count;
    
    // Add a small animation effect
    countDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
    }, 200);
}

// Animate button click
function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
}

// Add smooth transition to count display
countDisplay.style.transition = 'transform 0.2s ease';

// Log a welcome message to console
console.log('Welcome to the application! The app is ready.');
