/**
 * Rohan Battu Portfolio Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggler
    const themeBtn = document.getElementById('themeBtn');
    const htmlElement = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '☀ Light' : '🌙 Dark';
        
        // Optional: Save preference to localStorage
        localStorage.setItem('theme', newTheme);
    });

    // 2. Mobile Menu Toggle
    window.toggleMenu = function() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('open');
    };

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If this is a skill section, animate the bars
                if (entry.target.classList.contains('skills-wrap')) {
                    animateSkills(entry.target);
                }
            }
        });
    }, observerOptions);

    // Attach observer to elements with 'reveal' class
    document.querySelectorAll('.reveal, .skills-wrap').forEach(el => {
        revealObserver.observe(el);
    });

    function animateSkills(container) {
        const bars = container.querySelectorAll('.skill-fill');
        bars.forEach(bar => {
            // Check for a data-width attribute (e.g., data-width="95%")
            const targetWidth = bar.parentElement.previousElementSibling.querySelector('span').innerText;
            bar.style.width = targetWidth;
        });
    }
});