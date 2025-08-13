// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');
const faqQuestions = document.querySelectorAll('.faq-question');
const serviceModalBtns = document.querySelectorAll('.service-modal-btn');
const modal = document.getElementById('service-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const reviewsCarousel = document.getElementById('reviews-carousel');
const prevBtn = document.getElementById('prev-review');
const nextBtn = document.getElementById('next-review');
const carouselDots = document.getElementById('carousel-dots');
const quoteForm = document.getElementById('quote-form');
const formSuccess = document.getElementById('form-success');

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling and active link highlighting
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Sticky header
function handleScroll() {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
    
    updateActiveLink();
}

window.addEventListener('scroll', handleScroll);

// FAQ Accordion
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';
        const answer = question.nextElementSibling;
        
        // Close all other FAQ items
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.setAttribute('aria-expanded', 'false');
                otherQuestion.nextElementSibling.style.maxHeight = '0';
            }
        });
        
        // Toggle current FAQ item
        question.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Service Modal Data
const serviceData = {
    standard: {
        title: 'Standard Clean - Complete Checklist',
        content: `
            <h4>Kitchen</h4>
            <ul>
                <li>Wipe down all countertops and surfaces</li>
                <li>Clean exterior of appliances</li>
                <li>Clean sink and faucet</li>
                <li>Sweep and mop floors</li>
                <li>Empty trash and replace liner</li>
                <li>Wipe down cabinet fronts</li>
            </ul>
            
            <h4>Bathrooms</h4>
            <ul>
                <li>Clean and disinfect toilet inside and out</li>
                <li>Clean shower/tub and fixtures</li>
                <li>Clean sink, faucet, and mirror</li>
                <li>Sweep and mop floors</li>
                <li>Empty trash and replace liner</li>
                <li>Wipe down surfaces and counters</li>
            </ul>
            
            <h4>Living Areas & Bedrooms</h4>
            <ul>
                <li>Dust all surfaces and furniture</li>
                <li>Vacuum carpets and rugs</li>
                <li>Sweep and mop hard floors</li>
                <li>Make beds (if linens are available)</li>
                <li>Empty wastebaskets</li>
                <li>Light straightening and organizing</li>
            </ul>
        `
    },
    deep: {
        title: 'Deep Clean - Complete Checklist',
        content: `
            <h4>Everything in Standard Clean PLUS:</h4>
            
            <h4>Kitchen Deep Clean</h4>
            <ul>
                <li>Clean inside of oven</li>
                <li>Clean inside and outside of microwave</li>
                <li>Wipe down all cabinet exteriors</li>
                <li>Clean baseboards and door frames</li>
                <li>Detail clean all appliances</li>
                <li>Clean light fixtures and ceiling fans</li>
            </ul>
            
            <h4>Bathroom Deep Clean</h4>
            <ul>
                <li>Scrub grout and tile</li>
                <li>Clean shower doors and tracks</li>
                <li>Detail clean fixtures and hardware</li>
                <li>Clean baseboards and door frames</li>
                <li>Clean light fixtures and exhaust fans</li>
            </ul>
            
            <h4>Throughout Home</h4>
            <ul>
                <li>Dust and wipe all baseboards</li>
                <li>Clean door frames and doors</li>
                <li>Dust light fixtures and ceiling fans</li>
                <li>Clean air vents and registers</li>
                <li>Detail dust furniture and decor</li>
                <li>Clean window sills and tracks</li>
            </ul>
        `
    },
    move: {
        title: 'Move In/Move Out - Complete Checklist',
        content: `
            <h4>Everything in Deep Clean PLUS:</h4>
            
            <h4>Kitchen Move Clean</h4>
            <ul>
                <li>Clean inside all cabinets and drawers</li>
                <li>Clean inside refrigerator thoroughly</li>
                <li>Deep clean inside oven and stovetop</li>
                <li>Clean inside dishwasher</li>
                <li>Clean inside and outside of all appliances</li>
                <li>Scrub and sanitize all surfaces</li>
            </ul>
            
            <h4>Bathroom Move Clean</h4>
            <ul>
                <li>Deep scrub all surfaces</li>
                <li>Clean inside medicine cabinets</li>
                <li>Detail clean all fixtures and hardware</li>
                <li>Clean behind toilet and hard-to-reach areas</li>
                <li>Sanitize all surfaces thoroughly</li>
            </ul>
            
            <h4>Throughout Home</h4>
            <ul>
                <li>Clean inside all closets</li>
                <li>Wipe down all walls and surfaces</li>
                <li>Clean all light switches and outlets</li>
                <li>Detail clean all doors and frames</li>
                <li>Clean all baseboards and trim</li>
                <li>Vacuum/clean all floors thoroughly</li>
            </ul>
        `
    },
    renovation: {
        title: 'Post Renovation - Complete Checklist',
        content: `
            <h4>Specialized Construction Cleanup</h4>
            
            <h4>Dust and Debris Removal</h4>
            <ul>
                <li>Remove all construction dust from surfaces</li>
                <li>Clean all air vents and replace filters</li>
                <li>Detail clean all trim and moldings</li>
                <li>Remove dust from light fixtures and fans</li>
                <li>Clean all window sills and tracks</li>
                <li>Vacuum all surfaces including walls</li>
            </ul>
            
            <h4>Deep Surface Cleaning</h4>
            <ul>
                <li>Clean interior windows thoroughly</li>
                <li>Wipe down all walls and surfaces</li>
                <li>Clean all doors and door frames</li>
                <li>Detail clean all baseboards and trim</li>
                <li>Clean all light switches and outlets</li>
                <li>Polish all hardware and fixtures</li>
            </ul>
            
            <h4>Final Touches</h4>
            <ul>
                <li>Remove any remaining debris</li>
                <li>Clean and sanitize all surfaces</li>
                <li>Final vacuum and mop all floors</li>
                <li>Quality check all areas</li>
                <li>Touch up cleaning as needed</li>
            </ul>
        `
    },
    office: {
        title: 'Office Cleaning - Complete Checklist',
        content: `
            <h4>Workspace Areas</h4>
            <ul>
                <li>Clean and disinfect all desk surfaces</li>
                <li>Empty all wastebaskets and recycling</li>
                <li>Dust computer monitors and equipment</li>
                <li>Wipe down keyboards and phones</li>
                <li>Clean and organize common areas</li>
                <li>Vacuum all carpeted areas</li>
            </ul>
            
            <h4>Kitchen/Break Room</h4>
            <ul>
                <li>Clean and sanitize all surfaces</li>
                <li>Clean microwave inside and out</li>
                <li>Clean refrigerator exterior</li>
                <li>Clean sink and faucet</li>
                <li>Restock supplies as needed</li>
                <li>Sweep and mop floors</li>
            </ul>
            
            <h4>Restrooms</h4>
            <ul>
                <li>Clean and disinfect all fixtures</li>
                <li>Restock toilet paper and supplies</li>
                <li>Clean mirrors and surfaces</li>
                <li>Empty trash and replace liners</li>
                <li>Sweep and mop floors</li>
                <li>Sanitize door handles and switches</li>
            </ul>
            
            <h4>General Areas</h4>
            <ul>
                <li>Dust all surfaces and furniture</li>
                <li>Clean glass doors and windows</li>
                <li>Vacuum all floor surfaces</li>
                <li>Empty all trash receptacles</li>
                <li>Light straightening and organizing</li>
            </ul>
        `
    }
};

// Service Modal
serviceModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const serviceType = btn.getAttribute('data-service');
        const data = serviceData[serviceType];
        
        if (data) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Reviews Carousel
let currentReview = 0;
const reviews = document.querySelectorAll('.review-card');
const totalReviews = reviews.length;

// Create dots
function createDots() {
    for (let i = 0; i < totalReviews; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToReview(i));
        carouselDots.appendChild(dot);
    }
}

// Show specific review
function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
    });
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Go to specific review
function goToReview(index) {
    currentReview = index;
    showReview(currentReview);
}

// Next review
function nextReview() {
    currentReview = (currentReview + 1) % totalReviews;
    showReview(currentReview);
}

// Previous review
function prevReview() {
    currentReview = (currentReview - 1 + totalReviews) % totalReviews;
    showReview(currentReview);
}

// Event listeners for carousel
nextBtn.addEventListener('click', nextReview);
prevBtn.addEventListener('click', prevReview);

// Auto-advance carousel
let carouselInterval = setInterval(nextReview, 5000);

// Pause auto-advance on hover
reviewsCarousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

reviewsCarousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextReview, 5000);
});

// Initialize carousel
createDots();

// Form Validation
const formFields = {
    'full-name': {
        validate: (value) => value.trim().length >= 2,
        message: 'Please enter your full name (at least 2 characters)'
    },
    'phone': {
        validate: (value) => /^[\d\s\-\(\)\+]{10,}$/.test(value.replace(/\s/g, '')),
        message: 'Please enter a valid phone number'
    },
    'email': {
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Please enter a valid email address'
    },
    'address': {
        validate: (value) => value.trim().length >= 10,
        message: 'Please enter your complete address with city and zip'
    },
    'service-type': {
        validate: (value) => value !== '',
        message: 'Please select a service type'
    }
};

// Validate individual field
function validateField(fieldName, value) {
    const field = formFields[fieldName];
    if (field && !field.validate(value)) {
        return field.message;
    }
    return null;
}

// Show error message
function showError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Clear error message
function clearError(fieldName) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

// Real-time validation
Object.keys(formFields).forEach(fieldName => {
    const field = document.getElementById(fieldName);
    if (field) {
        field.addEventListener('blur', () => {
            const error = validateField(fieldName, field.value);
            if (error) {
                showError(fieldName, error);
            } else {
                clearError(fieldName);
            }
        });
        
        field.addEventListener('input', () => {
            clearError(fieldName);
        });
    }
});

// Form submission
quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const formData = new FormData(quoteForm);
    
    // Validate all required fields
    Object.keys(formFields).forEach(fieldName => {
        const value = formData.get(fieldName) || '';
        const error = validateField(fieldName, value);
        
        if (error) {
            showError(fieldName, error);
            isValid = false;
        } else {
            clearError(fieldName);
        }
    });
    
    if (isValid) {
        // Create email body
        const emailBody = `
New Quote Request from ${formData.get('full-name')}

Contact Information:
- Name: ${formData.get('full-name')}
- Phone: ${formData.get('phone')}
- Email: ${formData.get('email')}
- Address: ${formData.get('address')}

Service Details:
- Service Type: ${formData.get('service-type')}
- Bedrooms: ${formData.get('bedrooms') || 'Not specified'}
- Bathrooms: ${formData.get('bathrooms') || 'Not specified'}
- Square Feet: ${formData.get('square-feet') || 'Not specified'}
- Preferred Date/Time: ${formData.get('preferred-date') || 'Not specified'}

Additional Notes:
${formData.get('notes') || 'None'}

Please contact this customer within 24 hours to provide their free estimate.
        `.trim();
        
        // Create mailto link
        const subject = encodeURIComponent('New Quote Request - Iman\'s Cleaning Service');
        const body = encodeURIComponent(emailBody);
        const mailtoLink = `mailto:imanscleaningservice@gmail.com?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        quoteForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe section titles for animation
document.querySelectorAll('.section-title').forEach(title => {
    observer.observe(title);
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
});

// Observe images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.target.closest('.reviews-carousel')) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevReview();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextReview();
        }
    }
});

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        e.target.value = value;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active link
    updateActiveLink();
    
    // Add loading class to images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
    
    // Preload critical images
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && heroImage.src) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = heroImage.src;
        document.head.appendChild(preloadLink);
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData && perfData.loadEventEnd > 0) {
                console.log(`Page load time: ${Math.round(perfData.loadEventEnd)}ms`);
            }
        }, 0);
    });
}

// Error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        console.warn(`Failed to load image: ${img.src}`);
    });
});