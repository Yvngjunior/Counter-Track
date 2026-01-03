// Motivational messages
const messages = [
    "Keep going. You are doing better than you think.",
    "Small steps every day lead to big results.",
    "Stay consistent. Progress takes time.",
    "Believe in yourself and keep learning.",
    "Your effort today matters."
];

// Elements
const messageEl = document.getElementById("message");
const viewsEl = document.getElementById("views");
const clicksEl = document.getElementById("clicks");
const button = document.getElementById("motivateBtn");

// Get stored values or default to 0
let views = Number(localStorage.getItem("views")) || 0;
let clicks = Number(localStorage.getItem("clicks")) || 0;

// Increment views on load
views++;
localStorage.setItem("views", views);

// Update UI
viewsEl.textContent = views;
clicksEl.textContent = clicks;

// Button click handler
button.addEventListener("click", () => {
    clicks++;
    localStorage.setItem("clicks", clicks);
    clicksEl.textContent = clicks;

    // Pick random message
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageEl.textContent = messages[randomIndex];
});

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
    const shareData = {
        title: "Motivation Button",
        text: "Click the button and get a motivational message.",
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.log("Share cancelled");
        }
    } else {
        // Fallback: copy link
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard");
    }
});
