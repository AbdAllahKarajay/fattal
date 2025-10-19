// Fattal Group Landing Page JavaScript - Enhanced Version with Carousel
document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const languageButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('selectedLanguage', lang);
        });
    });
    
    function setLanguage(lang) {
        // Update active button
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update text content
        const elementsWithData = document.querySelectorAll('[data-en][data-ar]');
        elementsWithData.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });
        
        // Update HTML direction and language
        const htmlRoot = document.getElementById('html-root');
        if (htmlRoot) {
            htmlRoot.setAttribute('lang', lang);
            if (lang === 'ar') {
                htmlRoot.setAttribute('dir', 'rtl');
            } else {
                htmlRoot.setAttribute('dir', 'ltr');
            }
        } else {
            document.documentElement.setAttribute('lang', lang);
            if (lang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
            }
        }
    }
    
    // Mobile menu functionality
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero buttons functionality
    const learnMoreBtn = document.querySelector('.btn-primary');
    const ourBrandsBtn = document.querySelector('.btn-secondary');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (ourBrandsBtn) {
        ourBrandsBtn.addEventListener('click', function() {
            const brandsSection = document.querySelector('#brands');
            if (brandsSection) {
                brandsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Contact form functionality with floating labels
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            // Handle focus events
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            this.reset();
            
            // Remove focused class from all form groups
            formInputs.forEach(input => {
                input.parentElement.classList.remove('focused');
            });
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Enhanced notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            padding: 20px 25px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Carousel functionality
    class Carousel {
        constructor() {
            this.track = document.getElementById('carousel-track');
            this.cards = document.querySelectorAll('.brand-card');
            this.prevBtn = document.getElementById('prev-btn');
            this.nextBtn = document.getElementById('next-btn');
            this.dotsContainer = document.getElementById('carousel-dots');
            this.currentIndex = 0;
            this.cardsPerView = this.getCardsPerView();
            this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
            
            this.init();
        }
        
        init() {
            this.createDots();
            this.updateCarousel();
            this.bindEvents();
            this.startAutoPlay();
        }
        
        getCardsPerView() {
            const width = window.innerWidth;
            if (width <= 480) return 1;
            if (width <= 768) return 1;
            if (width <= 992) return 2;
            if (width <= 1200) return 3;
            return 4;
        }
        
        createDots() {
            this.dotsContainer.innerHTML = '';
            for (let i = 0; i < this.totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(i));
                this.dotsContainer.appendChild(dot);
            }
        }
        
        bindEvents() {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            
            // Touch/swipe support
            let startX = 0;
            let endX = 0;
            
            this.track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            });
            
            this.track.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                this.handleSwipe(startX, endX);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
            
            // Window resize
            window.addEventListener('resize', () => {
                this.cardsPerView = this.getCardsPerView();
                this.totalSlides = Math.ceil(this.cards.length / this.cardsPerView);
                this.currentIndex = 0;
                this.createDots();
                this.updateCarousel();
            });
        }
        
        handleSwipe(startX, endX) {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        }
        
        goToSlide(index) {
            this.currentIndex = index;
            this.updateCarousel();
            this.resetAutoPlay();
        }
        
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
            this.updateCarousel();
            this.resetAutoPlay();
        }
        
        prevSlide() {
            this.currentIndex = this.currentIndex === 0 ? this.totalSlides - 1 : this.currentIndex - 1;
            this.updateCarousel();
            this.resetAutoPlay();
        }
        
        updateCarousel() {
            const translateX = -this.currentIndex * (100 / this.cardsPerView);
            this.track.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
            
            // Update card active states
            this.cards.forEach((card, index) => {
                const cardIndex = Math.floor(index / this.cardsPerView);
                card.classList.toggle('active', cardIndex === this.currentIndex);
            });
        }
        
        startAutoPlay() {
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        }
        
        resetAutoPlay() {
            clearInterval(this.autoPlayInterval);
            this.startAutoPlay();
        }
    }
    
    // Initialize carousel
    const carousel = new Carousel();
    
    // Clickable brand functionality
    const clickableBrands = document.querySelectorAll('.brand-card, .brand-preview');
    clickableBrands.forEach(brand => {
        brand.addEventListener('click', function() {
            const brandName = this.getAttribute('data-brand') || 
                            this.querySelector('.brand-name').textContent.trim();
            if (brandName === 'بيكراتي' || brandName === 'bikrati') {
                window.location.href = 'bikrati.html';
            }
            // Add more brand pages here as needed
        });
    });
    
    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email && isValidEmail(email)) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.reset();
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Enhanced focus styles for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, .dot');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #60a5fa';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
            this.style.outlineOffset = '0';
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.brand-card, .stat-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const navbar = document.querySelector('.navbar');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Console welcome message
    console.log('%cFattal Group Website - Enhanced Version', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
    console.log('%cBringing Quality Food to Every Table Since 1965', 'color: #3b82f6; font-size: 14px;');
    console.log('%cFeatures: Split-screen design, Carousel, Mega menu, Enhanced UX', 'color: #60a5fa; font-size: 12px;');
});

// Add CSS for enhanced styles
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .navbar {
        transition: transform 0.3s ease;
    }
    
    .form-group.focused label {
        top: -8px !important;
        left: 10px !important;
        font-size: 0.9rem !important;
        color: var(--primary-color) !important;
        font-weight: 500 !important;
    }
    
    .brand-card {
        transition: all 0.3s ease;
    }
    
    .brand-card:hover {
        transform: translateY(-8px) scale(1.02);
    }
    
    .carousel-track {
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .dot {
        transition: all 0.3s ease;
    }
    
    .dot:hover {
        transform: scale(1.3);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .carousel-track,
        .brand-card,
        .dot,
        .navbar {
            transition: none;
        }
    }
`;
document.head.appendChild(style);
