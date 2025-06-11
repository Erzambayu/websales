// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
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
            entry.target.classList.add('loading');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .variant-card, .promo-card, .testimonial-card').forEach(el => {
    observer.observe(el);
});

// Variant detail modal functionality
const variantDetails = {
    comfort: {
        title: 'Chery Tiggo 8 Comfort',
        price: 'IDR 357.500.000',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: {
            engine: '1.6L TGDI Turbocharged',
            power: '186 PS',
            torque: '290 Nm',
            transmission: 'CVT',
            fuel: 'Bensin',
            seating: '7 Penumpang',
            length: '4722 mm',
            width: '1860 mm',
            height: '1745 mm',
            wheelbase: '2710 mm'
        },
        features: [
            '360° Panoramic Camera',
            'N95 Filter Dual Zone + 2nd Row',
            'Driving Assistance Feature',
            '7 Seater Configuration',
            'Dual Zone AC',
            'Leather Steering Wheel',
            'Premium Audio System',
            'Electric Parking Brake',
            'Keyless Entry & Start',
            'LED Headlights & DRL'
        ],
        safety: [
            '6 Airbags',
            'ABS + EBD',
            'Electronic Stability Control',
            'Hill Start Assist',
            'Tire Pressure Monitoring',
            'Rear Parking Sensors'
        ]
    },
    premium: {
        title: 'Chery Tiggo 8 Premium',
        price: 'IDR 397.500.000',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: {
            engine: '1.6L TGDI Turbocharged',
            power: '186 PS',
            torque: '290 Nm',
            transmission: 'CVT',
            fuel: 'Bensin',
            seating: '7 Penumpang',
            length: '4722 mm',
            width: '1860 mm',
            height: '1745 mm',
            wheelbase: '2710 mm'
        },
        features: [
            'Panoramic Sunroof',
            'N95 Filter All Rows (1st, 2nd, 3rd)',
            '9 ADAS Features',
            'Premium Leather Seats',
            'Intelligent Voice Assistant',
            'Wireless Phone Charging',
            '10.25" Touchscreen Infotainment',
            'Digital Instrument Cluster',
            'Ambient Lighting',
            'Power Tailgate',
            'Cruise Control',
            'Auto Rain Wipers'
        ],
        safety: [
            '6 Airbags',
            '9 ADAS Features',
            'Adaptive Cruise Control',
            'Lane Keep Assist',
            'Blind Spot Monitoring',
            'Forward Collision Warning',
            'Automatic Emergency Braking',
            'Traffic Sign Recognition'
        ]
    },
    pro: {
        title: 'Chery Tiggo 8 Pro',
        price: 'IDR 528.500.000',
        image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: {
            engine: '2.0L TGDI Turbocharged',
            power: '254 PS',
            torque: '390 Nm',
            transmission: '7-Speed DCT',
            fuel: 'Bensin',
            seating: '7 Penumpang',
            length: '4722 mm',
            width: '1860 mm',
            height: '1745 mm',
            wheelbase: '2710 mm'
        },
        features: [
            '2.0L TGDI Turbocharged Engine',
            '7-Speed Dual Clutch Transmission',
            'All Panoramic Sunroof Features',
            'Sony Premium Audio System',
            'Ventilated Front Seats',
            'Memory Seat Function',
            'HUD (Head-Up Display)',
            '12.3" Digital Cluster',
            'Gesture Control',
            'Air Suspension',
            '360° Around View Monitor',
            'Advanced Park Assist'
        ],
        safety: [
            '6 Airbags',
            'Complete ADAS Suite',
            'Adaptive Cruise Control',
            'Lane Centering Assist',
            'Traffic Jam Assist',
            'Rear Cross Traffic Alert',
            'Door Opening Warning',
            'Driver Monitoring System'
        ]
    }
};

function showVariantDetail(variant) {
    const modal = document.getElementById('variantModal');
    const modalContent = document.getElementById('modalContent');
    const details = variantDetails[variant];
    
    if (!details) return;
    
    modalContent.innerHTML = `
        <div class="variant-detail">
            <img src="${details.image}" alt="${details.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 2rem;">
            
            <div style="text-align: center; margin-bottom: 2rem;">
                <h2 style="color: #d32f2f; margin-bottom: 0.5rem;">${details.title}</h2>
                <p style="font-size: 1.5rem; font-weight: 700; color: #333;">${details.price} <span style="font-size: 1rem; color: #666; font-weight: normal;">*OTR Jakarta</span></p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h3 style="color: #d32f2f; margin-bottom: 1rem; border-bottom: 2px solid #d32f2f; padding-bottom: 0.5rem;">Spesifikasi Teknis</h3>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
                        ${Object.entries(details.specs).map(([key, value]) => `
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.8rem; padding-bottom: 0.5rem; border-bottom: 1px solid #e0e0e0;">
                                <strong style="color: #333;">${key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                <span style="color: #666;">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h3 style="color: #d32f2f; margin-bottom: 1rem; border-bottom: 2px solid #d32f2f; padding-bottom: 0.5rem;">Fitur Keselamatan</h3>
                    <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px;">
                        ${details.safety.map(feature => `
                            <div style="display: flex; align-items: center; margin-bottom: 0.8rem;">
                                <i class="fas fa-shield-alt" style="color: #4caf50; margin-right: 0.5rem;"></i>
                                <span style="color: #333;">${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div>
                <h3 style="color: #d32f2f; margin-bottom: 1rem; border-bottom: 2px solid #d32f2f; padding-bottom: 0.5rem;">Fitur Lengkap</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    ${details.features.map(feature => `
                        <div style="display: flex; align-items: center; background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                            <i class="fas fa-check" style="color: #4caf50; margin-right: 0.5rem;"></i>
                            <span style="color: #333;">${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem; padding: 2rem; background: linear-gradient(135deg, #d32f2f, #f44336); border-radius: 12px; color: white;">
                <h3 style="margin-bottom: 1rem;">Tertarik dengan ${details.title}?</h3>
                <p style="margin-bottom: 1.5rem; opacity: 0.9;">Hubungi saya untuk konsultasi, test drive, atau proses pembelian</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="https://wa.me/6281234567890?text=Halo%20Pak%20Budi,%20saya%20tertarik%20dengan%20${details.title}" target="_blank" style="background: #25d366; color: white; padding: 0.8rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fab fa-whatsapp"></i> Chat WhatsApp
                    </a>
                    <a href="tel:+6281234567890" style="background: #2196f3; color: white; padding: 0.8rem 1.5rem; border-radius: 25px; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-phone"></i> Telepon Langsung
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('variantModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('variantModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Form submission
const consultationForm = document.getElementById('consultationForm');
consultationForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const variant = formData.get('variant');
    const service = formData.get('service');
    const message = formData.get('message');
    
    // Create WhatsApp message
    let whatsappMessage = `Halo Pak Budi, saya ${name}.\n\n`;
    whatsappMessage += `Saya tertarik dengan layanan: ${service}\n`;
    if (variant && variant !== 'all') {
        whatsappMessage += `Varian yang diminati: ${variant}\n`;
    } else if (variant === 'all') {
        whatsappMessage += `Saya belum yakin varian mana, mohon saran terbaik\n`;
    }
    whatsappMessage += `Nomor WhatsApp: ${phone}\n`;
    if (email) {
        whatsappMessage += `Email: ${email}\n`;
    }
    if (message) {
        whatsappMessage += `Pesan tambahan: ${message}\n`;
    }
    whatsappMessage += `\nMohon dapat dihubungi untuk konsultasi lebih lanjut. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.');
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    this.reset();
});

// Add loading animation to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading class to elements with delay
    const animatedElements = document.querySelectorAll('.feature-card, .variant-card, .promo-card, .testimonial-card');
    
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
        }, 100);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.car-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Number animation for stats
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const finalNumber = stat.textContent;
        const isPlus = finalNumber.includes('+');
        const number = parseInt(finalNumber.replace(/\D/g, ''));
        let currentNumber = 0;
        const increment = number / 50;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= number) {
                stat.textContent = isPlus ? `${number}+` : number;
                clearInterval(timer);
            } else {
                stat.textContent = isPlus ? `${Math.floor(currentNumber)}+` : Math.floor(currentNumber);
            }
        }, 30);
    });
}

// Trigger number animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
});

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Testimonial slider (optional enhancement)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateX(0)';
        } else {
            testimonial.style.opacity = '0.5';
            testimonial.style.transform = 'translateX(20px)';
        }
    });
}

// Auto-rotate testimonials (disabled by default, can be enabled)
function autoRotateTestimonials() {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Add hover effects to cards
document.querySelectorAll('.variant-card, .feature-card, .promo-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click tracking for analytics (optional)
function trackEvent(eventName, element) {
    console.log(`Event tracked: ${eventName} on element:`, element);
    // Here you can add Google Analytics or other tracking code
    // gtag('event', eventName, { 'element': element });
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', this.textContent);
    });
});

// Add copy to clipboard functionality for contact info
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.textContent;
        element.textContent = 'Disalin!';
        element.style.color = '#4caf50';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = '';
        }, 2000);
    });
}

// Add click handlers for phone numbers
document.querySelectorAll('p').forEach(p => {
    if (p.textContent.includes('+62 812-3456-7890')) {
        p.style.cursor = 'pointer';
        p.title = 'Klik untuk menyalin nomor';
        p.addEventListener('click', () => {
            copyToClipboard('+6281234567890', p);
        });
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.transition = 'opacity 0.3s';
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    sectionObserver.observe(section);
}); 