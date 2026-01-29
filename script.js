// 1. Smooth Scrolling
document.querySelectorAll('nav ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Enquiry Alert
const enquiryForm = document.querySelector('.enquiry-form');
if(enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = this.querySelectorAll('input')[0].value;
        alert("Thank you, " + name + "! Mr. Rajesh Chobe will contact you shortly.");
        this.reset(); 
    });
}

// 3. Navbar Scroll Fix (Ensures bar stays dark)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#060b13'; 
        nav.style.boxShadow = '0 6px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = '#060b13';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 4. Fade-in Animation for Cards
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.p-card, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});