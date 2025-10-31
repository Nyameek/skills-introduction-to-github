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
    
    // Add a small animation effect using CSS class
    countDisplay.classList.add('animate');
    setTimeout(() => {
        countDisplay.classList.remove('animate');
    }, 200);
}

// Animate button click
function animateButton(button) {
    button.classList.add('animate-click');
    setTimeout(() => {
        button.classList.remove('animate-click');
    }, 100);
}

// Log a welcome message to console
console.log('Welcome to the application! The app is ready.');
