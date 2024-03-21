console.log('Welcome to Internet Connection Detector');

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

let isOnline = true; // Initial online status

function setColor() {
    bgColor.classList.add("online");
}

// Function to simulate online/offline status
function simulateOnlineStatus() {
    // Simulate online/offline status with a random probability
    isOnline = Math.random() < 0.9; // 90% chance of being online
}

// Function to update UI based on online status
function updateUI() {
    if (isOnline) {
        statusDisplay.textContent = "You're ONLINE!!! Connection looks Good 🤩";
        setColor();
        image.src = "./Img/online.png";
    } else {
        statusDisplay.textContent = "OOPS!!! Your Internet Connection is Down 😔";
        bgColor.classList.remove("online");
        image.src = "./Img/offline.png";
    }
}

// Monitor the connection
setInterval(() => {
    simulateOnlineStatus(); // Simulate online status change
    updateUI(); 
}, 5000); // Check every 5 seconds

// Check Connection When Page Loads
window.addEventListener("load", () => {
    updateUI(); 
});
