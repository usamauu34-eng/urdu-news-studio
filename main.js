// Basic interactivity for Digital News Portal
document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital News Portal Initialized');

    // Smooth scroll for navigation links if they were internal
    // (Adding this for future extensibility)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add sticky header shadow on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Optional: Log the current date in Urdu for the header if needed
    // In a real app, we might display this.
});
