// Open Gift Popup Function
function openGift() {
    const popup = document.getElementById('popup');
    const giftBox = document.querySelector('.gift-box');

    // Show popup
    popup.style.display = 'flex';
    giftBox.classList.add('active');
}

// Close Gift Popup Function
function closeGift() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    // Remove all confetti after popup closes
    let confettis = document.querySelectorAll('.confetti');
    confettis.forEach(confetti => confetti.remove());
}

// Show Confetti effect
function showConfetti() {
    for (let i = 0; i < 30; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(confetti);
    }
}


function openSurprisePage() {
    // Adding a fade-in effect before redirecting
    document.body.style.animation = "fadeIn 1s forwards";
    setTimeout(function() {
        window.location.href = "new_page.html"; // Replace with the actual URL of your surprise page
    }, 1000); // Wait for the animation to complete before redirection
}