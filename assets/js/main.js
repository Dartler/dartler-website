// Translation data will be loaded from external files
let translations = {};
let currentLanguage = 'en';
let translationsLoaded = false;

// Load translation file
async function loadTranslations(lang) {
    try {
        const response = await fetch(`./locales/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (error) {
        console.error(`Failed to load translations for ${lang}:`, error);
        // Fallback to English if other language fails
        if (lang !== 'en') {
            return await loadTranslations('en');
        }
        return {};
    }
}

// Detect browser language and initialize
async function initializeLanguage() {
    // Check if language is already saved in localStorage
    let savedLanguage = localStorage.getItem('dartler-language');

    if (!savedLanguage) {
        // Detect browser language if no saved preference
        const browserLanguage = navigator.language || navigator.userLanguage;
        const languageCode = browserLanguage.toLowerCase();

        // Check if the browser language is German or from German-speaking countries
        if (languageCode.startsWith('de') ||
            languageCode === 'de-de' ||
            languageCode === 'de-at' ||
            languageCode === 'de-ch') {
            savedLanguage = 'de';
        } else {
            savedLanguage = 'en'; // Default to English for all other languages
        }
    }

    // Load translations and switch language
    await loadTranslations(savedLanguage);
    translationsLoaded = true;
    switchLanguage(savedLanguage);
}

// Switch language function
async function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('dartler-language', lang);

    // Load translations if not already loaded
    if (!translations[lang]) {
        await loadTranslations(lang);
    }

    // Update active language button styling
    const langEn = document.getElementById('lang-en');
    const langDe = document.getElementById('lang-de');

    if (langEn && langDe) {
        langEn.classList.toggle('bg-white', lang === 'en');
        langEn.classList.toggle('bg-opacity-20', lang === 'en');
        langEn.classList.toggle('text-gray-800', lang === 'en');

        langDe.classList.toggle('bg-white', lang === 'de');
        langDe.classList.toggle('bg-opacity-20', lang === 'de');
        langDe.classList.toggle('text-gray-800', lang === 'de');
    }

    // Update all translatable elements
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update document title based on current page
    updateDocumentTitle(lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Update document title based on current page
function updateDocumentTitle(lang) {
    const currentPage = window.location.pathname;

    if (currentPage.includes('ecosystem.html')) {
        document.title = lang === 'de'
            ? 'Dartler - Ökosystem Features & Preise'
            : 'Dartler - Ecosystem Features & Pricing';
    } else {
        document.title = lang === 'de'
            ? 'Dartler - Dein Komplettes Darts-Ökosystem'
            : 'Dartler - Your Complete Darts Ecosystem';
    }
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Simple form validation
    if (!data.name || !data.email || !data.message) {
        alert(currentLanguage === 'de'
            ? 'Bitte füllen Sie alle Pflichtfelder aus.'
            : 'Please fill in all required fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
        alert(currentLanguage === 'de'
            ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
            : 'Please enter a valid email address.');
        return;
    }

    // Here you would typically send the data to your backend
    console.log('Contact form data:', data);

    // Show success message
    alert(currentLanguage === 'de'
        ? 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.'
        : 'Thank you for your message! We will get back to you soon.');

    // Reset form
    form.reset();
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-slate-900');
    } else {
        header.classList.remove('bg-slate-900');
        header.classList.add('bg-transparent');
    }
}

function initializeHeaderScroll() {
    // Add initial class based on scroll position
    handleHeaderScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleHeaderScroll);
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Open menu
    function openMenu() {
        mobileMenu.classList.add('menu-open');
        menuOverlay.classList.add('show');
        document.body.classList.add('menu-open');
    }

    // Close menu
    function closeMenu() {
        mobileMenu.classList.remove('menu-open');
        menuOverlay.classList.remove('show');
        document.body.classList.remove('menu-open');
    }

    // Event listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('menu-open')) {
            closeMenu();
        }
    });

    // Update mobile language buttons when language changes
    function updateMobileLanguageButtons() {
        const mobileLangEn = document.getElementById('mobile-lang-en');
        const mobileLangDe = document.getElementById('mobile-lang-de');

        if (mobileLangEn && mobileLangDe) {
            // Remove active class from both
            mobileLangEn.classList.remove('active');
            mobileLangDe.classList.remove('active');

            // Add active class to current language
            if (currentLanguage === 'en') {
                mobileLangEn.classList.add('active');
            } else if (currentLanguage === 'de') {
                mobileLangDe.classList.add('active');
            }
        }
    }

    // Call this function initially and whenever language changes
    updateMobileLanguageButtons();

    // Override the switchLanguage function to also update mobile buttons
    const originalSwitchLanguage = window.switchLanguage;
    window.switchLanguage = function (lang) {
        originalSwitchLanguage(lang);
        updateMobileLanguageButtons();
        // Close mobile menu after language switch
        closeMenu();
    };
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function () {
    initializeLanguage();
    initializeHeaderScroll();
    initializeSmoothScrolling();

    // Initialize mobile menu component
    if (typeof initializeMobileMenuComponent === 'function') {
        initializeMobileMenuComponent();
    }

    initializeMobileMenu(); // Add mobile menu initialization

    // Add contact form listener if it exists
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Make functions globally available
window.switchLanguage = switchLanguage;
