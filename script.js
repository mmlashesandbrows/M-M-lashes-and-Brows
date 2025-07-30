// script.js

// Hero slider images
const heroImages = [
    'hero1.webp',
    'makeup.webp',
    'hero3.jpg',
    'facial1.jpg',
    'waxing.webp',
];

// Initialize hero slider
function initHeroSlider() {
    const hero = document.querySelector('.hero');
    let current = 0;
    function changeHero() {
        hero.style.backgroundImage = `url('${heroImages[current]}')`;
        current = (current + 1) % heroImages.length;
    }
    changeHero();
    setInterval(changeHero, 3000);
}

// Mobile navigation toggle
function initMobileNav() {
    const menuCheckbox = document.getElementById('menuCheckbox');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuCheckbox.checked = false;
        });
    });
}

// Reveal on scroll using IntersectionObserver
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, options);
    reveals.forEach(el => observer.observe(el));
}

// Gallery modal functionality
function initGalleryModal() {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal-close');
    const galleryImgs = document.querySelectorAll('.gallery-img');

    galleryImgs.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.textContent = this.dataset.caption || '';
        });
    });
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize all functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Only run slider on index page where hero exists
    if (document.querySelector('.hero')) {
        initHeroSlider();
    }
    initMobileNav();
    initReveal();
    initGalleryModal();
});