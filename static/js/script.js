document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.neon-logo');
    
    // Function to simulate neon warm-up flicker
    const warmupFlicker = () => {
        const flickerTimes = 3 + Math.floor(Math.random() * 3); // 3-5 flickers
        let currentFlicker = 0;
        
        const flicker = () => {
            const intensity = 0.3 + Math.random() * 0.7;
            logo.style.filter = `brightness(${intensity}) contrast(1.2)`;
            
            currentFlicker++;
            if (currentFlicker < flickerTimes) {
                setTimeout(flicker, 50 + Math.random() * 100);
            } else {
                logo.style.filter = '';
                logo.classList.add('lit');
            }
        };
        
        flicker();
    };

    // Initial warmup effect
    setTimeout(warmupFlicker, 4000); // Start after the first fill animation
    
    // Repeat the cycle
    setInterval(() => {
        logo.classList.remove('lit');
        logo.style.filter = 'brightness(0.3) contrast(1.2)';
        setTimeout(warmupFlicker, 4000);
    }, 6000); // Match with CSS animation duration
});
