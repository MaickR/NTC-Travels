/*------------------------------------------------------------------
* Project:        NTC Travels & Dreams
* Description:    Custom Swiper Slider Initialization
* Updated:        February 2026
-------------------------------------------------------------------*/

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initBannerSwiper();
    });

    // Also try on window load as fallback
    window.addEventListener('load', function() {
        initBannerSwiper();
    });

    function initBannerSwiper() {
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.warn('Swiper library not loaded. Loading from CDN...');
            loadSwiperFromCDN();
            return;
        }

        createSwiper();
    }

    function loadSwiperFromCDN() {
        // Load Swiper CSS
        if (!document.querySelector('link[href*="swiper"]')) {
            var swiperCSS = document.createElement('link');
            swiperCSS.rel = 'stylesheet';
            swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
            document.head.appendChild(swiperCSS);
        }

        // Load Swiper JS
        if (!document.querySelector('script[src*="swiper"]')) {
            var swiperJS = document.createElement('script');
            swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
            swiperJS.onload = function() {
                createSwiper();
            };
            document.body.appendChild(swiperJS);
        }
    }

    function createSwiper() {
        var swiperContainer = document.querySelector('.swiper-container');
        if (!swiperContainer) {
            return;
        }

        // Check if already initialized
        if (swiperContainer.swiper) {
            return;
        }

        try {
            var bannerSwiper = new Swiper('.swiper-container', {
                // Basic settings
                loop: true,
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                
                // Effects
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                
                // Pagination (optional)
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                
                // Keyboard control
                keyboard: {
                    enabled: true,
                    onlyInViewport: true
                },
                
                // Accessibility
                a11y: {
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide'
                },

                // Events
                on: {
                    init: function() {
                        console.log('NTC Banner Swiper initialized');
                    }
                }
            });

            // Store reference globally for debugging
            window.ntcBannerSwiper = bannerSwiper;

        } catch (error) {
            console.error('Error initializing Swiper:', error);
        }
    }

})();
