window.onload = function() {
    console.log("Birthday page loaded!");

    const audioPlayer = document.getElementById('audioPlayer');

function playAudio() {
    audioPlayer.play();
}
    // Generate bubbles dynamically
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 20; i++) { // Create 20 bubbles
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Set random bubble position and delay
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 7}s`;
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
        balloon.style.animationDuration = `${Math.random() * 20 + 40}s`; // Random duration between 2s and 5s

        balloonsContainer.appendChild(balloon);
    }
};
