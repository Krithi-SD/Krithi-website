let currentMemory = 1;
 
 
/* =========================
   START GAME
   ========================= */
 
function startGame() {
 
    document.querySelector(".game-container").style.display = "none";
 
    document.getElementById("level1").style.display = "flex";
 
    document.getElementById("level2").style.display = "none";
 
    document.getElementById("proposal").style.display = "none";
 
    document.getElementById("level3").style.display = "none";

    const music=document.getElementById("bgMusic");
    music.volume=0.4;
    music.play();
}
 
 
/* =========================
   LEVEL 1
   ========================= */
 
function correctAnswer(button) {
 
    button.innerHTML = "✓ YESSSS ❤️";
 
    button.style.background = "#ff6fae";
 
    document.getElementById("game-message").innerHTML =
        "That's where I first saw you... ✨";
 
 
    setTimeout(function() {
 
        document.getElementById("level1").style.display = "none";
 
        document.getElementById("level2").style.display = "flex";
 
    }, 1500);
}
 
 
function wrongAnswer(button) {
 
    button.innerHTML = "✕ Wrong";
 
    button.style.opacity = "0.5";
}
 
 
/* =========================
   LEVEL 2 — MEMORIES
   ========================= */
 
function openMemory(number) {
 
    // Wrong order
 
    if (number !== currentMemory) {
 
        document.getElementById("memory-message").innerHTML =
            "🔒 Locked... unlock the previous memory first ❤️";
 
        return;
    }
 
 
    // MEMORY 1 — THE CALL
 
    if (number === 1) {
 
        document.getElementById("memory1").innerHTML =
            "✓ THE CALL — UNLOCKED";
 
        document.getElementById("memory-message").innerHTML =
            "You called me and asked me to meet you... 📞❤️";
 
        currentMemory = 2;
    }
 
 
    // MEMORY 2 — THE MEETING
 
    else if (number === 2) {
 
        document.getElementById("memory2").innerHTML =
            "✓ THE MEET — UNLOCKED";
 
        document.getElementById("memory-message").innerHTML =
            "And then we met at Drink & Drive Café... ☕❤️";
 
        currentMemory = 3;
    }
 
 
    // MEMORY 3 — THE QUESTION
 
    else if (number === 3) {
 
        document.getElementById("memory3").innerHTML =
            "✓ THE WAIT — UNLOCKED 💍";
 
        document.getElementById("memory-message").innerHTML =
            "The question that changed everything... ❤️";
 
 
        setTimeout(function() {
 
            document.getElementById("level2").style.display = "none";
 
            document.getElementById("proposal").style.display = "flex";
 
        }, 1200);
    }
}
 
 
/* =========================
   PROPOSAL → LEVEL 3
   ========================= */
 
function continueFromProposal() {
 
    document.getElementById("proposal").style.display = "none";
 
    document.getElementById("level3").style.display = "flex";
}
 
 
/* =========================
   LEVEL 3 — BIKE GAME
   ========================= */
 
let bikePosition = 1;
 
 
function moveBike(direction) {
 
    const bike = document.getElementById("bike");
    const message = document.getElementById("ride-message");
 
    if (direction === "left") {
        bikePosition--;
    }
 
    else if (direction === "right") {
        bikePosition++;
    }
 
    // Keep bike inside the road
    if (bikePosition < 0) {
        bikePosition = 0;
    }
 
    if (bikePosition > 2) {
        bikePosition = 2;
    }
 
    bike.style.left =
        (bikePosition * 35 + 15) + "%";
 
 
    // Messages
 
    if (bikePosition === 0) {
 
        message.innerHTML =
            "Careful Hari! 😂 ";
 
    }
 
    else if (bikePosition === 1) {
 
        message.innerHTML =
            "Tried to Ride better! 🏍️❤️";
 
    }
 
    else if (bikePosition === 2) {
 
        message.innerHTML =
            "We made it This time! 😂❤️";
 
        // Move to Level 4
 
        setTimeout(function() {
 
            document.getElementById("level3").style.display = "none";
 
            document.getElementById("level4").style.display = "flex";
 
        }, 1500);
    }
}
 
 

/* =========================
   LEVEL 4 → BIRTHDAY
   ========================= */
 
function showBirthday() {
 
    document.getElementById("level4").style.display = "none";
 
    document.getElementById("birthday").style.display = "flex";
 
}

/* =========================
   SECRET GIFT
   ========================= */
 
function showGift() {
    document.getElementById("giftPopup").style.display = "flex";
}
 
function closeGift() {
    document.getElementById("giftPopup").style.display = "none";
}
 