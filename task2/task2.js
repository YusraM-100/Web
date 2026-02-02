const btn = document.getElementById("startBtn");
const box = document.getElementById("box");
const speedUp = document.getElementById("speedUpBtn");
const speedDown = document.getElementById("speedDownBtn");
const speedDisplay = document.getElementById("speedDisplay");

let duration = 2.0; // seconds (lower = faster)
const minDuration = 0.2; // fastest (0.2s)
const maxDuration = 5.0; // slowest (5s)
const step = 0.2; // change step in seconds

function updateSpeedDisplay() {
    speedDisplay.textContent = duration.toFixed(1) + "s";
}

// Faster: decrease duration (moves quicker)
speedUp.addEventListener("click", function () {
    duration = Math.max(minDuration, +(duration - step).toFixed(2));
    updateSpeedDisplay();
});

// Slower: increase duration (moves slower)
speedDown.addEventListener("click", function () {
    duration = Math.min(maxDuration, +(duration + step).toFixed(2));
    updateSpeedDisplay();
});

btn.addEventListener("click", function () {
    // set inline transition for left only so other transitions (hover) don't conflict
    box.style.transition = `left ${duration}s ease-in-out`;

    // ensure a starting left value exists
    if (!box.style.left) box.style.left = "0px";

    const current = parseFloat(box.style.left) || 0;
    const target = 550; // container width 600 - box width 50

    if (Math.abs(current - target) < 1) {
        box.style.left = "0px";
    } else {
        box.style.left = target + "px";
    }
});

updateSpeedDisplay();
