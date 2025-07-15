// Shared components for Dartler website

// Mobile Menu Component
function createMobileMenu() {
    return `
        <!-- Mobile Side Menu -->
        <div id="mobile-menu"
            class="fixed top-0 right-0 h-full w-80 bg-slate-900 text-white transform translate-x-full transition-transform duration-300 ease-in-out z-30 md:hidden">
            <div class="flex flex-col h-full">
                <!-- Menu Header -->
                <div class="flex justify-between items-center p-6 border-b border-slate-700">
                    <div class="flex items-center">
                        <img src="./assets/graphics/dartler_icon.svg" alt="Dartler Logo" class="h-6 w-auto mr-2">
                        <h2 class="text-lg font-semibold">Dartler</h2>
                    </div>
                    <button id="close-menu-btn" class="text-white text-xl p-2 hover:text-gray-200 transition-colors">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <!-- Menu Items -->
                <nav class="flex flex-col p-6 space-y-6 flex-1">
                    <a href="./index.html#dartler-app"
                        class="text-white font-medium text-lg hover:text-gray-200 transition-colors menu-link"
                        data-lang-key="nav_app">App</a>
                    <a href="./index.html#dartler-ecosystem"
                        class="text-white font-medium text-lg hover:text-gray-200 transition-colors menu-link"
                        data-lang-key="nav_ecosystem">Ecosystem</a>
                    <a href="./ecosystem.html#detailed-features"
                        class="text-white font-medium text-lg hover:text-gray-200 transition-colors menu-link"
                        data-lang-key="nav_features">Features</a>
                    <a href="./ecosystem.html#pricing"
                        class="text-white font-medium text-lg hover:text-gray-200 transition-colors menu-link"
                        data-lang-key="nav_pricing">Pricing</a>
                    <a href="./ecosystem.html#contact"
                        class="text-white font-medium text-lg hover:text-gray-200 transition-colors menu-link"
                        data-lang-key="nav_contact">Contact</a>

                    <!-- Mobile Language Switcher -->
                    <div class="pt-4 border-t border-slate-700">
                        <h3 class="text-sm font-medium text-gray-400 mb-3" data-lang-key="language">Language</h3>
                        <div class="flex space-x-4">
                            <button id="mobile-lang-en"
                                class="text-white font-medium px-3 py-2 rounded hover:bg-slate-700 transition-colors"
                                onclick="switchLanguage('en')">EN</button>
                            <button id="mobile-lang-de"
                                class="text-white font-medium px-3 py-2 rounded hover:bg-slate-700 transition-colors"
                                onclick="switchLanguage('de')">DE</button>
                        </div>
                    </div>

                    <!-- Mobile GitHub Link -->
                    <a href="https://github.com/Dartler" target="_blank" rel="noopener noreferrer"
                        class="flex items-center text-white font-medium text-lg hover:text-gray-200 transition-colors pt-4 border-t border-slate-700">
                        <i class="fab fa-github mr-3"></i>
                        GitHub
                    </a>
                </nav>

                <!-- Get App Button -->
                <div class="p-6 border-t border-slate-700">
                    <a href="#" class="m3-button-filled w-full text-center block" data-lang-key="nav_get_app">Get App</a>
                </div>
            </div>
        </div>

        <!-- Menu Overlay -->
        <div id="menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-20 hidden md:hidden"></div>
    `;
}

// Generate navigation header HTML
function generateHeader(currentPage = 'index') {
    const isEcosystemPage = currentPage === 'ecosystem';
    const homeLink = isEcosystemPage ? './index.html' : './index.html';
    const ecosystemLink = isEcosystemPage ? '#detailed-features' : './ecosystem.html';

    return `
        <nav class="container mx-auto flex justify-between items-center">
            <div class="flex items-center">
                <a href="${homeLink}" class="flex items-center">
                    <img src="./assets/graphics/dartler_icon.svg" alt="Dartler Logo" class="text-white h-8 w-auto mr-3">
                    <h1 class="m3-headline-large text-white">Dartler</h1>
                </a>
            </div>
            <!-- Desktop Menu -->
            <div class="flex items-center">
                <a href="${homeLink}#dartler-app" class="text-white font-medium mx-4 hidden md:inline-block hover:text-gray-200"
                    data-lang-key="nav_app">App</a>
                <a href="${homeLink}#dartler-ecosystem"
                    class="text-white font-medium mx-4 hidden md:inline-block hover:text-gray-200"
                    data-lang-key="nav_ecosystem">Ecosystem</a>
                ${isEcosystemPage ? `
                <a href="#detailed-features"
                    class="text-white font-medium mx-4 hidden md:inline-block hover:text-gray-200"
                    data-lang-key="nav_features">Features</a>
                <a href="#pricing" class="text-white font-medium mx-4 hidden md:inline-block hover:text-gray-200"
                    data-lang-key="nav_pricing">Pricing</a>
                <a href="#contact" class="text-white font-medium mx-4 hidden md:inline-block hover:text-gray-200"
                    data-lang-key="nav_contact">Contact</a>
                ` : ''}

                <!-- Language Switcher -->
                <div class="flex items-center mx-4 hidden md:flex">
                    <button id="lang-en"
                        class="text-white font-medium px-2 py-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
                        onclick="switchLanguage('en')">EN</button>
                    <span class="text-white mx-1">|</span>
                    <button id="lang-de"
                        class="text-white font-medium px-2 py-1 rounded hover:bg-white hover:bg-opacity-20 transition-colors"
                        onclick="switchLanguage('de')">DE</button>
                </div>

                <!-- GitHub Link -->
                <a href="https://github.com/Dartler" target="_blank" rel="noopener noreferrer"
                    class="text-white text-xl mx-4 hover:text-gray-200 transition-colors hidden md:inline-block">
                    <i class="fab fa-github"></i>
                </a>

                <a href="#" class="m3-button-filled text-sm hidden md:inline-block" data-lang-key="nav_get_app">Get
                    App</a>

                <!-- Hamburger Menu Button (Mobile Only) -->
                <button id="hamburger-btn"
                    class="md:hidden text-white text-xl p-2 hover:text-gray-200 transition-colors">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
    `;
}

// Generate footer HTML
function generateFooter() {
    return `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 class="m3-display-medium text-white mb-4" data-lang-key="footer_title">Ready to Throw?</h3>
            <p class="text-indigo-200 max-w-xl mx-auto mb-8" data-lang-key="footer_subtitle">Download the Dartler app today and rediscover your passion for darts.</p>
            <div class="flex justify-center items-center space-x-4 mb-12">
                <a href="#" class="m3-button-filled"
                    style="background-color: var(--md-sys-color-secondary); color: var(--md-sys-color-on-secondary)">
                    <i class="fab fa-google-play mr-2"></i> <span data-lang-key="footer_google_play">Google Play</span>
                </a>
            </div>
            <div class="flex justify-center space-x-6 text-2xl mb-8">
                <a href="#" class="social-icon transition-colors"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon transition-colors"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-icon transition-colors"><i class="fab fa-instagram"></i></a>
            </div>
            <p class="text-gray-400" data-lang-key="footer_copyright">&copy; 2025 Dartler. All Rights Reserved.</p>
        </div>
    `;
}

// Initialize mobile menu component
function initializeMobileMenuComponent() {
    // Add mobile menu to body if it doesn't exist
    if (!document.getElementById('mobile-menu')) {
        document.body.insertAdjacentHTML('beforeend', createMobileMenu());
    }
}

// Make functions globally available
window.createMobileMenu = createMobileMenu;
window.generateHeader = generateHeader;
window.generateFooter = generateFooter;
window.initializeMobileMenuComponent = initializeMobileMenuComponent;
