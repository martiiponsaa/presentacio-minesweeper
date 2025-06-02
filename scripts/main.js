// Main JavaScript for Minesweeper Project Presentation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation on scroll
    initScrollAnimation();
    
    // Handle smooth scrolling for navigation links
    initSmoothScroll();
    
    // Auto-play video when in view
    handleVideoAutoplay();
});

// Function to handle fade-in animations on scroll
function initScrollAnimation() {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Add fade-in class to all sections
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // When 10% of the item is visible
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Function for smooth scrolling when clicking navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to handle video autoplay when in view
function handleVideoAutoplay() {
    const video = document.getElementById('demo-video');
    
    if (!video) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If video is in viewport and not already playing
            if (entry.isIntersecting && video.paused) {
                // Wait a moment for better user experience
                setTimeout(() => {
                    video.play().catch(err => {
                        console.log('Autoplay prevented:', err);
                    });
                }, 1000);
            } else if (!entry.isIntersecting && !video.paused) {
                video.pause();
            }
        });
    }, { threshold: 0.6 }); // When 60% of the video is visible
    
    observer.observe(video);
}

// Function to create a countdown animation (if needed for presentation timing)
function createCountdown(targetDate) {
    // Implementation of countdown functionality
    // This could be used if you want to add a countdown timer to your presentation
}
