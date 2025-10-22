// Brand Loader Script for Dynamic Brand Pages
document.addEventListener('DOMContentLoaded', function() {
    // Get brand ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const brandId = urlParams.get('id');
    
    // Check if brand ID exists
    if (!brandId || !brandsData[brandId]) {
        // Redirect to home page if brand not found
        window.location.href = 'index.html';
        return;
    }
    
    // Get brand data
    const brandData = brandsData[brandId];
    
    // Get current language (default to English)
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // Load brand content
    loadBrandContent(brandData, currentLang);
    
    // Listen for language changes
    document.addEventListener('languageChanged', function(event) {
        loadBrandContent(brandData, event.detail.language);
    });
});

function loadBrandContent(brandData, language) {
    // Update page title
    document.getElementById('page-title').textContent = `${brandData.name[language]} | Fattal Group`;
    
    // Update breadcrumb
    const breadcrumbBrand = document.getElementById('breadcrumb-brand');
    breadcrumbBrand.textContent = brandData.name[language];
    breadcrumbBrand.setAttribute('data-en', brandData.name.en);
    breadcrumbBrand.setAttribute('data-ar', brandData.name.ar);
    
    // Update hero section
    document.getElementById('brand-title').textContent = brandData.name[language];
    document.getElementById('brand-title').setAttribute('data-en', brandData.name.en);
    document.getElementById('brand-title').setAttribute('data-ar', brandData.name.ar);
    
    document.getElementById('brand-tagline').textContent = brandData.tagline[language];
    document.getElementById('brand-tagline').setAttribute('data-en', brandData.tagline.en);
    document.getElementById('brand-tagline').setAttribute('data-ar', brandData.tagline.ar);
    
    document.getElementById('brand-description').textContent = brandData.description[language];
    document.getElementById('brand-description').setAttribute('data-en', brandData.description.en);
    document.getElementById('brand-description').setAttribute('data-ar', brandData.description.ar);
    
    // Update brand logo
    updateBrandLogo(brandData);
    
    // Update features
    updateBrandFeatures(brandData, language);
    
    // Update product categories
    updateProductCategories(brandData, language);
    
    // Update CTA section
    updateCTASection(brandData, language);
}

function updateBrandLogo(brandData) {
    const logoContainer = document.getElementById('brand-logo-large');
    
    if (brandData.logo.startsWith('fas fa-') || brandData.logo.startsWith('fab fa-')) {
        // FontAwesome icon
        logoContainer.innerHTML = `
            <i class="${brandData.logo}" style="font-size: 4rem; color: var(--primary-color);"></i>
            <h2>${brandData.name[document.documentElement.getAttribute('lang') || 'en']}</h2>
        `;
    } else {
        // Image logo
        logoContainer.innerHTML = `
            <img src="${brandData.logo}" alt="${brandData.name.en}" style="width: 100px; height: 100px; margin-bottom: 20px;" />
            <h2>${brandData.name[document.documentElement.getAttribute('lang') || 'en']}</h2>
        `;
    }
}


function updateBrandFeatures(brandData, language) {
    const featuresContainer = document.getElementById('brand-features');
    featuresContainer.innerHTML = '';
    
    brandData.features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature-item';
        featureElement.innerHTML = `
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3 data-en="${feature.title.en}" data-ar="${feature.title.ar}">${feature.title[language]}</h3>
            <p data-en="${feature.description.en}" data-ar="${feature.description.ar}">${feature.description[language]}</p>
        `;
        featuresContainer.appendChild(featureElement);
    });
}

function updateProductCategories(brandData, language) {
    const categoriesContainer = document.getElementById('product-categories');
    categoriesContainer.innerHTML = '';
    
    brandData.productCategories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category-item';
        
        const itemsList = category.items.map(item => 
            `<li data-en="${item.en}" data-ar="${item.ar}">${item[language]}</li>`
        ).join('');
        
        categoryElement.innerHTML = `
            <div class="category-image">
                <i class="${category.icon}"></i>
            </div>
            <h3 data-en="${category.title.en}" data-ar="${category.title.ar}">${category.title[language]}</h3>
            <p data-en="${category.description.en}" data-ar="${category.description.ar}">${category.description[language]}</p>
            <ul class="category-features">
                ${itemsList}
            </ul>
        `;
        categoriesContainer.appendChild(categoryElement);
    });
}

function updateCTASection(brandData, language) {
    // Update CTA title and description based on brand
    const ctaTitle = document.getElementById('cta-title');
    const ctaDescription = document.getElementById('cta-description');
    
    ctaTitle.textContent = `Interested in ${brandData.name[language]} Products?`;
    ctaTitle.setAttribute('data-en', `Interested in ${brandData.name.en} Products?`);
    ctaTitle.setAttribute('data-ar', `مهتم بمنتجات ${brandData.name.ar}؟`);
    
    ctaDescription.textContent = `Contact us to learn more about our ${brandData.tagline[language].toLowerCase()} and how we can serve your needs.`;
    ctaDescription.setAttribute('data-en', `Contact us to learn more about our ${brandData.tagline.en.toLowerCase()} and how we can serve your needs.`);
    ctaDescription.setAttribute('data-ar', `اتصل بنا لمعرفة المزيد عن ${brandData.tagline.ar.toLowerCase()} وكيف يمكننا خدمة احتياجاتك.`);
    
    // Update product highlights with brand-specific content
    const bestSeller = document.getElementById('best-seller');
    const newArrival = document.getElementById('new-arrival');
    const customerFavorite = document.getElementById('customer-favorite');
    
    // Use first product category items as examples
    if (brandData.productCategories.length > 0) {
        const firstCategory = brandData.productCategories[0];
        const firstItem = firstCategory.items[0];
        
        bestSeller.textContent = firstItem[language];
        bestSeller.setAttribute('data-en', firstItem.en);
        bestSeller.setAttribute('data-ar', firstItem.ar);
        
        if (firstCategory.items.length > 1) {
            const secondItem = firstCategory.items[1];
            newArrival.textContent = secondItem[language];
            newArrival.setAttribute('data-en', secondItem.en);
            newArrival.setAttribute('data-ar', secondItem.ar);
        }
        
        if (firstCategory.items.length > 2) {
            const thirdItem = firstCategory.items[2];
            customerFavorite.textContent = thirdItem[language];
            customerFavorite.setAttribute('data-en', thirdItem.en);
            customerFavorite.setAttribute('data-ar', thirdItem.ar);
        }
    }
}

// Override the existing language switching to trigger content reload
const originalSetLanguage = window.setLanguage;
if (originalSetLanguage) {
    window.setLanguage = function(lang) {
        originalSetLanguage(lang);
        
        // Trigger brand content reload
        const urlParams = new URLSearchParams(window.location.search);
        const brandId = urlParams.get('id');
        if (brandId && brandsData[brandId]) {
            loadBrandContent(brandsData[brandId], lang);
        }
    };
}
