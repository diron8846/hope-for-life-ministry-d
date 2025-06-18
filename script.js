// Hope for Life Jesus Ministry - Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('show');
    });

    // Close mobile menu
    closeMobileMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('show');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY;
        
        revealElements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            
            if (scrolled + windowHeight > elementTop + elementHeight / 4) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) translateX(0)';
            }
        });
    }

    // Initial check for elements in view
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Prayer Request Form Submission
    const prayerForm = document.querySelector('.prayer-form');
    
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const request = formData.get('request');
            
            // Basic validation
            if (!name || !email || !request) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<div class="loading"></div> Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                showMessage('Your prayer request has been submitted successfully. Our prayer team will pray for you.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Contact Form Submission
    const contactForms = document.querySelectorAll('form');
    
    contactForms.forEach(form => {
        if (!form.classList.contains('prayer-form')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<div class="loading"></div> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    showMessage('Your message has been sent successfully. We will get back to you soon.', 'success');
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            });
        }
    });

    // Donation Button Functionality
    const donationButtons = document.querySelectorAll('.donation-btn');
    const customAmountInput = document.querySelector('input[type="number"]');
    
    donationButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            donationButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
            donationButtons.forEach(btn => btn.classList.add('bg-golden', 'text-primary'));
            
            // Add active class to clicked button
            this.classList.remove('bg-golden', 'text-primary');
            this.classList.add('bg-primary', 'text-white');
            
            // Clear custom amount
            if (customAmountInput) {
                customAmountInput.value = '';
            }
        });
    });

    // Custom amount input
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            if (this.value) {
                // Remove active class from all preset buttons
                donationButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
                donationButtons.forEach(btn => btn.classList.add('bg-golden', 'text-primary'));
            }
        });
    }

    // Gallery Image Modal (Simple Implementation)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const modal = createImageModal(img.src, img.alt);
            document.body.appendChild(modal);
        });
    });

    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksForHighlight = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinksForHighlight.forEach(link => {
                    link.classList.remove('text-primary', 'dark:text-golden');
                });
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink && activeLink.classList.contains('nav-link')) {
                    activeLink.classList.add('text-primary', 'dark:text-golden');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call

    // Dark Mode Toggle (if implemented)
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            
            // Save preference to localStorage
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
        });
        
        // Load saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.documentElement.classList.add('dark');
        }
    }

    // Parallax Effect for Hero Section (Optional)
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }

    // Testimonials Carousel (Simple Auto-scroll)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function showNextTestimonial() {
        if (testimonialCards.length > 3) { // Only if more than 3 testimonials
            testimonialCards.forEach(card => card.style.display = 'none');
            
            for (let i = 0; i < 3; i++) {
                const index = (currentTestimonial + i) % testimonialCards.length;
                testimonialCards[index].style.display = 'block';
            }
            
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        }
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(showNextTestimonial, 5000);

    // Event Card Hover Effects Enhancement
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add floating action button for quick actions
    createFloatingActionButton();
});

// Utility Functions

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-lg font-bold opacity-70 hover:opacity-100">×</button>
        </div>
    `;
    
    // Insert at top of main content
    const mainContent = document.querySelector('main') || document.body;
    mainContent.insertBefore(messageDiv, mainContent.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function createImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full">
            <img src="${src}" alt="${alt}" class="max-w-full max-h-full object-contain rounded-lg">
            <button class="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75">
                ×
            </button>
        </div>
    `;
    
    // Close modal on click
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.tagName === 'BUTTON') {
            modal.remove();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.parentNode) {
            modal.remove();
        }
    });
    
    return modal;
}

function createFloatingActionButton() {
    const fab = document.createElement('a');
    fab.href = '#prayer';
    fab.className = 'fab';
    fab.innerHTML = '<i class="fas fa-praying-hands"></i>';
    fab.title = 'Prayer Request';
    
    document.body.appendChild(fab);
    
    // Hide/show FAB based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            fab.style.opacity = '1';
            fab.style.visibility = 'visible';
        } else {
            fab.style.opacity = '0';
            fab.style.visibility = 'hidden';
        }
    });
    
    // Initial state
    fab.style.opacity = '0';
    fab.style.visibility = 'hidden';
    fab.style.transition = 'all 0.3s ease';
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize animations on page load
window.addEventListener('load', function() {
    // Add stagger effect to cards
    const cards = document.querySelectorAll('.ministry-card, .testimonial-card, .event-card, .gallery-item');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in-up');
    });
});

// Service Worker Registration (for offline capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Handle online/offline status
window.addEventListener('online', function() {
    showMessage('Connection restored. You are back online.', 'success');
});

window.addEventListener('offline', function() {
    showMessage('You are currently offline. Some features may not be available.', 'error');
});
