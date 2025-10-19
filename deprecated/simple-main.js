// Simple Clean JavaScript
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
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero buttons functionality
    const exploreBrandsBtn = document.querySelector('.btn-primary');
    const learnMoreBtn = document.querySelector('.btn-outline');
    
    if (exploreBrandsBtn) {
        exploreBrandsBtn.addEventListener('click', function() {
            const brandsSection = document.querySelector('#brands');
            if (brandsSection) {
                brandsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
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
    
    // Contact form functionality
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
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
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Simple notification system
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
        
        // Add simple styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#1e3a8a'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 400px;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            font-weight: 500;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            notification.remove();
        });
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 4000);
    }
    
    // Clickable brand functionality
    const clickableBrands = document.querySelectorAll('.clickable-brand');
    clickableBrands.forEach(brand => {
        brand.addEventListener('click', function() {
            const brandName = this.getAttribute('data-brand');
            if (brandName === 'bikrati') {
                window.location.href = 'bikrati.html';
            }
            // Add more brand pages here as needed
        });
    });
    
    // Statistics counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
    
    function animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        const duration = 1500;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.textContent.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Simple scroll effect for header
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            document.querySelector('.header').style.transform = 'translateY(-100%)';
        } else {
            document.querySelector('.header').style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
    
    // Console welcome message
    console.log('%cFattal Group - Simple Edition', 'color: #1e3a8a; font-size: 20px; font-weight: bold; font-family: Inter, sans-serif;');
    console.log('%cBringing Quality Food to Every Table Since 1965', 'color: #3b82f6; font-size: 14px; font-weight: 500;');
    console.log('%cSimple • Clean • Effective', 'color: #60a5fa; font-size: 12px;');
});

// Add CSS for simple animations
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .header {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);