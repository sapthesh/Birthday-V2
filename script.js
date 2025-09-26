document.addEventListener('DOMContentLoaded', () => {
    const giftContainer = document.getElementById('giftContainer');
    const birthdayCard = document.getElementById('birthdayCard');
    const confettiContainer = document.querySelector('.confetti-container');
    const confettiCount = 150; // Number of confetti pieces

    // --- Confetti Generation ---
    function createConfetti() {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            const colors = ['#e94560', '#f0e68c', '#00d8d6', '#ffffff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.animationDuration = `${Math.random() * 3 + 4}s`; // Duration between 4s and 7s
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.backgroundColor = randomColor;
            
            // Randomize shape
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
                confetti.style.width = `${Math.random() * 8 + 5}px`;
                confetti.style.height = confetti.style.width;
            } else {
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = `${Math.random() * 8 + 5}px`;
            }

            confettiContainer.appendChild(confetti);
        }
    }

    // --- Event Listener for the Gift Box ---
    giftContainer.addEventListener('click', () => {
        // Hide the gift box with a fade out effect
        giftContainer.style.opacity = '0';
        setTimeout(() => {
            giftContainer.style.display = 'none';
        }, 500); // Match this with transition duration in CSS

        // Show the birthday card
        birthdayCard.style.display = 'block';

        // Start the confetti
        createConfetti();
    });
});
