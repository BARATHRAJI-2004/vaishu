
window.onload = function() {
    console.log("Birthday page loaded!");
    
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');

    // Play the audio automatically when the page loads
    audio.play();

    // Set up button to pause/play music
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause Music'; // Change button text to Pause
        } else {
            audio.pause();
            playButton.textContent = 'Play Music'; // Change button text to Play
        }
    });

    // Generate bubbles dynamically
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 20; i++) { // Create 20 bubbles
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Set random bubble position and delay
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 4}s`;
        bubble.style.width = bubble.style.height = `${Math.random() * 30 + 20}px`; // Random size
        
        bubblesContainer.appendChild(bubble);
    }
   
    // Generate balloons dynamically
    const balloonsContainer = document.querySelector('.balloons');
    for (let i = 0; i < 30; i++) { // Create 10 balloons
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Set random balloon position
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 3 + 6}s`; // Random duration between 2s and 5s

        balloonsContainer.appendChild(balloon);
    }
};
