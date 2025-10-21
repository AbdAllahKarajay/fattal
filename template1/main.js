// Fattal Group Landing Page JavaScript - Static Version
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
    
    // Theme switching functionality
    function initializeTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const htmlRoot = document.getElementById('html-root') || document.documentElement;
        
        // Check for saved theme preference or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        
        // Set initial theme
        applyTheme(currentTheme);
        
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                applyTheme(newTheme);
                localStorage.setItem('theme', newTheme);
            });
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
        
        function applyTheme(theme) {
            htmlRoot.setAttribute('data-theme', theme);
            if (themeToggle) {
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
                }
            }
        }
    }
    
    // Initialize theme
    initializeTheme();
    
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
    
    // Smooth scrolling for navigation links (only hash links)
    const hashLinks = document.querySelectorAll('.nav-link[href^="#"]');
    hashLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
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
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            max-width: 400px;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', function() {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Clickable brand functionality
    const clickableBrands = document.querySelectorAll('.clickable-brand');
    const brandIds = ['bikrati', 'delovood', 'fattal-food', 'ingredient-world', 'packaging-world', 'khayrat-blady', 'fattal-dairy', 'delobar', 'vita-duro'];
    
    clickableBrands.forEach((brand, index) => {
        brand.addEventListener('click', function() {
            const brandId = brandIds[index];
            if (brandId) {
                // Navigate to generic brand page with brand ID
                window.location.href = `brand.html?id=${brandId}`;
            }
        });
        
        // Add cursor pointer style
        brand.style.cursor = 'pointer';
    });
    
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
    
     // Dropdown functionality
     const brandsDropdown = document.getElementById('brandsDropdown');
     const brandsDropdownMenu = document.getElementById('brandsDropdownMenu');
     let dropdownTimeout;
 
     if (brandsDropdown && brandsDropdownMenu) {
         brandsDropdown.addEventListener('mouseenter', () => {
             clearTimeout(dropdownTimeout);
             brandsDropdownMenu.style.opacity = '1';
             brandsDropdownMenu.style.visibility = 'visible';
             brandsDropdownMenu.style.transform = 'translateY(0)';
         });
 
         brandsDropdown.addEventListener('mouseleave', () => {
             dropdownTimeout = setTimeout(() => {
                 brandsDropdownMenu.style.opacity = '0';
                 brandsDropdownMenu.style.visibility = 'hidden';
                 brandsDropdownMenu.style.transform = 'translateY(-10px)';
             }, 150);
         });
 
         brandsDropdownMenu.addEventListener('mouseenter', () => {
             clearTimeout(dropdownTimeout);
         });
 
         brandsDropdownMenu.addEventListener('mouseleave', () => {
             dropdownTimeout = setTimeout(() => {
                 brandsDropdownMenu.style.opacity = '0';
                 brandsDropdownMenu.style.visibility = 'hidden';
                 brandsDropdownMenu.style.transform = 'translateY(-10px)';
             }, 150);
         });
     }
 
     // Add CSS for enhanced styles
     const style = document.createElement('style');
     style.textContent = `
     /* Dropdown Menu Styles */
     .nav-dropdown {
         position: relative;
         display: inline-block;
     }
 
     .dropdown-toggle {
         display: flex;
         align-items: center;
         gap: 8px;
     }
 
     .dropdown-toggle i {
         font-size: 0.8rem;
         transition: transform 0.3s ease;
     }
 
     .nav-dropdown:hover .dropdown-toggle i {
         transform: rotate(180deg);
     }
 
     .dropdown-menu {
         position: absolute;
         top: 100%;
         left: 0;
         background: var(--white);
         border-radius: 8px;
         box-shadow: var(--shadow-medium);
         min-width: 250px;
         opacity: 0;
         visibility: hidden;
         transform: translateY(-10px);
         transition: all 0.3s ease;
         z-index: 1000;
         border: 1px solid var(--light-gray);
     }
 
     .nav-dropdown:hover .dropdown-menu {
         opacity: 1;
         visibility: visible;
         transform: translateY(0);
     }
 
     .dropdown-item {
         display: flex;
         align-items: center;
         gap: 15px;
         padding: 15px 20px;
         color: var(--text-dark);
         text-decoration: none;
         transition: all 0.3s ease;
         border-bottom: 1px solid var(--light-gray);
     }
 
     .dropdown-item:last-child {
         border-bottom: none;
     }
 
     .dropdown-item:hover {
         background: var(--light-gray);
         color: var(--primary-color);
     }
 
     .dropdown-item-icon {
         width: 40px;
         height: 40px;
         background: var(--primary-color);
         border-radius: 50%;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-shrink: 0;
     }
 
     .dropdown-item-icon i {
         font-size: 1.2rem;
         color: var(--white);
     }
 
     .dropdown-item-content h4 {
         font-size: 1rem;
         font-weight: 600;
         margin-bottom: 4px;
         color: inherit;
     }
 
     .dropdown-item-content p {
         font-size: 0.85rem;
         color: var(--text-light);
         margin: 0;
     }
 
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
     
     .brand-accordion-item {
         transition: all 0.3s ease;
     }
     
     .brand-accordion-item:hover {
         transform: translateY(-2px);
     }
     
     .brand-content {
         transition: max-height 0.3s ease;
     }
     
     .brand-arrow {
         transition: transform 0.3s ease;
     }
     
     .callout-box,
     .contact-item,
     .stat-highlight {
         transition: all 0.3s ease;
     }
     
     /* Mobile menu styles */
     @media (max-width: 992px) {
         .nav-container.mobile-menu-active .nav-left,
         .nav-container.mobile-menu-active .nav-right {
             display: flex;
             flex-direction: column;
             position: absolute;
             top: 100%;
             left: 0;
             right: 0;
             background: var(--white);
             box-shadow: var(--shadow-medium);
             padding: 20px;
             gap: 20px;
         }
         
         .nav-container.mobile-menu-active .nav-left {
             border-bottom: 1px solid var(--light-gray);
         }
     }
     
     @media (prefers-reduced-motion: reduce) {
         .brand-content,
         .brand-accordion-item,
         .callout-box,
         .contact-item,
         .stat-highlight,
         .navbar {
             transition: none;
         }
     }
 `;
     document.head.appendChild(style);
 

    // Add focus styles for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea');
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
    
    // Console welcome message
    console.log('%cFattal Group Website - Static Version', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
    console.log('%cBringing Quality Food to Every Table Since 1965', 'color: #3b82f6; font-size: 14px;');
});

// Add CSS for basic styles
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
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
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
`;
document.head.appendChild(style);