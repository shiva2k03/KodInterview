// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only handle anchor links (starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

// Add animation to cards when they come into view
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Mobile menu toggle (for future implementation)
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('nav').appendChild(mobileMenuToggle);

// Add scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Class cards navigation
const classCards = document.querySelector('.class-cards');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        classCards.scrollBy({
            left: -370,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        classCards.scrollBy({
            left: 370,
            behavior: 'smooth'
        });
    });
}

// Help and Earn button effect
const helpEarnBtn = document.querySelector('.help-earn-btn');
if (helpEarnBtn) {
    helpEarnBtn.addEventListener('mouseenter', () => {
        helpEarnBtn.style.transform = 'translateY(-2px)';
    });

    helpEarnBtn.addEventListener('mouseleave', () => {
        helpEarnBtn.style.transform = 'translateY(0)';
    });
}

// Chat with BroKod button effect
const chatBtn = document.querySelector('.chat-btn');
if (chatBtn) {
    chatBtn.addEventListener('mouseenter', () => {
        chatBtn.style.transform = 'scale(1.05)';
    });

    chatBtn.addEventListener('mouseleave', () => {
        chatBtn.style.transform = 'scale(1)';
    });
}

// Add hover effects to action icons
const actionIcons = document.querySelectorAll('.action-icons i');
actionIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = '#3498db';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.color = '#666';
    });
});

// Help desk button effect
const helpDeskBtns = document.querySelectorAll('.help-desk');
helpDeskBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.color = '#3498db';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.color = '#666';
    });
}); 