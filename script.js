// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 64; // Account for fixed navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Whatsapp Chat
document.querySelectorAll('.wa-order').forEach(button => {
  button.addEventListener('click', function () {
    const paket = this.getAttribute('data-package');

    const nomor = '6281291139673';
    const pesan = `Halo, Saya ingin membeli Paket Digitalisasi ${paket} untuk bisnis saya`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
  });
});