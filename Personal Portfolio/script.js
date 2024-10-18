// Toggle navigation menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener('click', function () {
    navLinks.classList.toggle("active");
})

document.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect for the Hero section
    const typingText = document.querySelector('.typing-text');
    const textArray = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 500);

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent default link behavior
            e.preventDefault();
            const target = this.getAttribute('href'); // Get href attribute
            const targetElement = document.querySelector(target); // Select target element
            if(targetElement){
                // Check if target exists
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Fade-in Animations on Scroll
    const fadeInSections = document.querySelectorAll('.fade-in'); // Elements with 'fade-in' class
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when in view
                observer.unobserve(entry.target); // Stop observing after fade-in
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    fadeInSections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

