// Fattal Group Landing Page JavaScript - Magazine Style Version with Accordion
document.addEventListener('DOMContentLoaded', function () {
    // Language switching functionality
    const languageButtons = document.querySelectorAll('.lang-btn');
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
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
            themeToggle.addEventListener('click', function () {
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
    const navContainer = document.querySelector('.nav-container');
    
    if (hamburger && navContainer) {
        hamburger.addEventListener('click', function () {
            navContainer.classList.toggle('mobile-menu-active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links (only hash links)
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 90; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            if (navContainer) {
                navContainer.classList.remove('mobile-menu-active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Hero buttons functionality
    const learnMoreBtn = document.querySelector('.btn-primary');
    const ourBrandsBtn = document.querySelector('.btn-secondary');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function () {
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
        ourBrandsBtn.addEventListener('click', function () {
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
            input.addEventListener('focus', function () {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function () {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
        
        contactForm.addEventListener('submit', function (e) {
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
        closeBtn.addEventListener('click', function () {
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
    
    // Accordion functionality
    class Accordion {
        constructor() {
            this.accordionItems = document.querySelectorAll('.brand-accordion-item');
            this.init();
        }
        
        init() {
            this.accordionItems.forEach(item => {
                const header = item.querySelector('.brand-header');
                const content = item.querySelector('.brand-content');
                const arrow = item.querySelector('.brand-arrow');
                
                header.addEventListener('click', () => {
                    this.toggleItem(item);
                });
                
                // Keyboard navigation
                header.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggleItem(item);
                    }
                });
                
                // Make header focusable
                header.setAttribute('tabindex', '0');
                header.setAttribute('role', 'button');
                header.setAttribute('aria-expanded', 'false');
                
                // Set initial state
                content.setAttribute('aria-hidden', 'true');
            });
        }
        
        toggleItem(item) {
            const isActive = item.classList.contains('active');
            const content = item.querySelector('.brand-content');
            const header = item.querySelector('.brand-header');
            
            // Close all other items
            this.accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    this.closeItem(otherItem);
                }
            });
            
            // Toggle current item
            if (isActive) {
                this.closeItem(item);
            } else {
                this.openItem(item);
            }
        }
        
        openItem(item) {
            const content = item.querySelector('.brand-content');
            const header = item.querySelector('.brand-header');
            
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
            content.setAttribute('aria-hidden', 'false');
            
            // Smooth height animation
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        
        closeItem(item) {
            const content = item.querySelector('.brand-content');
            const header = item.querySelector('.brand-header');
            
            item.classList.remove('active');
            header.setAttribute('aria-expanded', 'false');
            content.setAttribute('aria-hidden', 'true');
            content.style.maxHeight = '0';
        }
        
        // Open first item by default
        openFirstItem() {
            if (this.accordionItems.length > 0) {
                this.openItem(this.accordionItems[0]);
            }
        }
    }
    
    // Initialize accordion
    const accordion = new Accordion();
    
    // Open featured brand by default
    const featuredBrand = document.querySelector('.brand-accordion-item.featured');
    if (featuredBrand) {
        accordion.openItem(featuredBrand);
    } else {
        accordion.openFirstItem();
    }
    
    // Brands Slider functionality
    class BrandsSlider {
        constructor() {
            this.sliderTrack = document.getElementById('sliderTrack');
            this.prevBtn = document.getElementById('prevBtn');
            this.nextBtn = document.getElementById('nextBtn');
            this.dotsContainer = document.getElementById('sliderDots');
            this.brandCards = document.querySelectorAll('.brand-card');
            this.currentIndex = 0;
            this.slidesToShow = this.getSlidesToShow();
            this.totalSlides = this.brandCards.length;
            this.maxIndex = Math.max(0, this.totalSlides - this.slidesToShow);
            this.autoPlayInterval = null;
            this.autoPlayDelay = 4000; // 4 seconds
            
            this.init();
        }
        
        init() {
            this.createDots();
            this.updateSlider();
            this.bindEvents();
            this.startAutoPlay();
        }
        
        getSlidesToShow() {
            const width = window.innerWidth;
            if (width <= 480) return 1;
            if (width <= 768) return 1;
            if (width <= 992) return 2;
            if (width <= 1200) return 3;
            return 4;
        }
        
        createDots() {
            this.dotsContainer.innerHTML = '';
            const totalDots = this.maxIndex + 1;
            

            let arabic = document.documentElement.getAttribute('lang') === 'ar';
            let start = arabic ? totalDots - 1 : 0;
            let end = arabic ? 0 : totalDots - 1;
            for (let i = start; i !== end; i += arabic ? -1 : 1) {
                const dot = document.createElement('button');
                dot.className = 'slider-dot';
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(i));
                this.dotsContainer.appendChild(dot);
            }
        }
        
        bindEvents() {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
            
            // Add click functionality to brand cards
            const brandIds = ['bikrati', 'delovood', 'fattal-food', 'ingredient-world', 'khayrat-blady', 'fattal-dairy', 'delobar', 'vita-duro'];
            
            this.brandCards.forEach((card, index) => {
                card.addEventListener('click', () => {
                    const brandId = brandIds[index];
                    if (brandId) {
                        // Navigate to generic brand page with brand ID
                        window.location.href = `brand.html?id=${brandId}`;
                    }
                });
                
                // Add cursor pointer style
                card.style.cursor = 'pointer';
            });
            
            // Touch/swipe support
            let startX = 0;
            let startY = 0;
            let isDragging = false;
            
            this.sliderTrack.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isDragging = true;
                this.stopAutoPlay();
            });
            
            this.sliderTrack.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
            });
            
            this.sliderTrack.addEventListener('touchend', (e) => {
                if (!isDragging) return;
                
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Only trigger if horizontal swipe is more significant than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
                
                isDragging = false;
                this.startAutoPlay();
            });
            
            // Keyboard navigation
            this.sliderTrack.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide();
                }
            });
            
            // Make slider focusable for keyboard navigation
            this.sliderTrack.setAttribute('tabindex', '0');
            
            // Pause auto-play on hover
            this.sliderTrack.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.sliderTrack.addEventListener('mouseleave', () => this.startAutoPlay());
            
            // Handle window resize
            window.addEventListener('resize', () => {
                this.slidesToShow = this.getSlidesToShow();
                this.maxIndex = Math.max(0, this.totalSlides - this.slidesToShow);
                this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
                this.createDots();
                this.updateSlider();
            });
        }
        
        updateSlider() {
            const cardWidth = 100 / this.slidesToShow;
            let arabic = document.documentElement.getAttribute('lang') === 'ar';
            const translateX = -(this.currentIndex * cardWidth);
            this.sliderTrack.style.transform = arabic ? `translateX(${-translateX}%)` : `translateX(${translateX}%)`;
            // Update button states
            this.prevBtn.disabled = arabic ? this.currentIndex >= this.maxIndex : this.currentIndex === 0;
            this.nextBtn.disabled = arabic ? this.currentIndex === 0 : this.currentIndex >= this.maxIndex;

            // Update dots
            const dots = this.dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }

        goToSlide(index) {
            this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
            this.updateSlider();
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        nextSlide() {
            let arabic = document.documentElement.getAttribute('lang') === 'ar';
            if (arabic) {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.updateSlider();
                } else {
                    // Loop to end
                    this.currentIndex = this.maxIndex;
                    this.updateSlider();
                }
                this.stopAutoPlay();
                this.startAutoPlay();
                return;
            }
            if (this.currentIndex < this.maxIndex) {
                this.currentIndex++;
                this.updateSlider();
            } else {
                // Loop back to start
                this.currentIndex = 0;
                this.updateSlider();
            }
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        prevSlide() {
            let arabic = document.documentElement.getAttribute('lang') === 'ar';
            if (arabic) {
                if (this.currentIndex < this.maxIndex) {
                    this.currentIndex++;
                    this.updateSlider();
                } else {
                    // Loop back to start
                    this.currentIndex = 0;
                    this.updateSlider();
                }
                this.stopAutoPlay();
                this.startAutoPlay();
                return;
            }
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateSlider();
            } else {
                // Loop to end
                this.currentIndex = this.maxIndex;
                this.updateSlider();
            }
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        }

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }

        scrollToBrandsSection() {
            const brandsSection = document.getElementById('brands');
            if (brandsSection) {
                brandsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    // Initialize brands slider
    const brandsSlider = new BrandsSlider();

    class ImageSlider {
        constructor() {
            this.sliderTrack = document.getElementById('imageSliderTrack');
            this.prevBtn = document.getElementById('imagePrevBtn');
            this.nextBtn = document.getElementById('imageNextBtn');
            this.dotsContainer = document.getElementById('imageSliderDots');
            this.slides = document.querySelectorAll('.image-slider .slide');
            this.currentIndex = 0;
            this.totalSlides = this.slides.length;
            this.autoPlayInterval = null;
            this.autoPlayDelay = 5000; // 5 seconds


            this.init();
        }

        init() {
            this.createDots();
            this.updateSlider();
            this.bindEvents();
            this.startAutoPlay();
        }

        createDots() {
            this.dotsContainer.innerHTML = '';
            for (let i = 0; i < this.totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = 'slider-dot';
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
            let startY = 0;
            let isDragging = false;

            this.sliderTrack.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isDragging = true;
                this.stopAutoPlay();
            });

            this.sliderTrack.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
            });

            this.sliderTrack.addEventListener('touchend', (e) => {
                if (!isDragging) return;

                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const diffX = startX - endX;
                const diffY = startY - endY;

                // Only trigger if horizontal swipe is more significant than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }

                isDragging = false;
                this.startAutoPlay();
            });

            // Keyboard navigation
            this.sliderTrack.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide();
                }
            });

            // Make slider focusable for keyboard navigation
            this.sliderTrack.setAttribute('tabindex', '0');

            // Pause auto-play on hover
            this.sliderTrack.addEventListener('mouseenter', () => this.stopAutoPlay());
            this.sliderTrack.addEventListener('mouseleave', () => this.startAutoPlay());

            // Handle window resize
            window.addEventListener('resize', () => {
                this.updateSlider();
            });
        }

        updateSlider() { 
            const translateX = -(this.currentIndex * 100);
            this.sliderTrack.style.transform = `translateX(${translateX}%)`;

            // Update button states - no need to disable for looping slider
            this.prevBtn.disabled = false;
            this.nextBtn.disabled = false;

            // Update dots
            const dots = this.dotsContainer.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }

        goToSlide(index) {
            this.currentIndex = Math.max(0, Math.min(index, this.totalSlides - 1));
            this.updateSlider();
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        nextSlide() {
            if (this.currentIndex < this.totalSlides - 1) {
                this.currentIndex++;
                this.updateSlider();
            } else {
                // Loop back to start
                this.currentIndex = 0;
                this.updateSlider();
            }
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateSlider();
            } else {
                // Loop to end
                this.currentIndex = this.totalSlides - 1;
                this.updateSlider();
            }
            this.stopAutoPlay();
            this.startAutoPlay();
        }

        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        }

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
    }

    // Initialize image slider when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            const imageSlider = new ImageSlider();
        });
    } else {
        const imageSlider = new ImageSlider();
    }

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


    // Clickable brand functionality
    // const clickableBrands = document.querySelectorAll('.brand-header[data-brand]');
    // clickableBrands.forEach(brand => {
    //     brand.addEventListener('click', function() {
    //         const brandName = this.getAttribute('data-brand');
    //         if (brandName === 'bikrati') {
    //             window.location.href = 'bikrati.html';
    //         }
    //         // Add more brand pages here as needed
    //     });
    // });

    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
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
    document.addEventListener('keydown', function (e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            if (navContainer) {
                navContainer.classList.remove('mobile-menu-active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        }
    });

    // Enhanced focus styles for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, .brand-header');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid #60a5fa';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
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
    const animatedElements = document.querySelectorAll('.brand-accordion-item, .callout-box, .contact-item, .stat-highlight');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
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

    // Magazine-style hover effects
    const magazineElements = document.querySelectorAll('.callout-box, .contact-item, .stat-highlight');
    magazineElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-heavy)';
        });

        element.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-light)';
        });
    });
    
    // Console welcome message
    console.log('%cFattal Group Website - Magazine Style Version', 'color: #1e3a8a; font-size: 20px; font-weight: bold;');
    console.log('%cBringing Quality Food to Every Table Since 1965', 'color: #3b82f6; font-size: 14px;');
    console.log('%cFeatures: Magazine layout, Accordion brands, Centered navigation, Editorial design', 'color: #60a5fa; font-size: 12px;');
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
