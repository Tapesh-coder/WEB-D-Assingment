// Parallax Effect on Scroll
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.hero');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

// Dynamic Effects (FadeIn Animation on Scroll)
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('[data-animate="fadeIn"]');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Initial trigger for fadeIn
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-animate="fadeIn"]');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
