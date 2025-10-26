// Navigation hide on scroll
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add background when scrolled
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide/show based on direction (after 100px)
    if (currentScroll > 100) {
        if (currentScroll > lastScroll) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
    } else {
        navbar.classList.remove('navbar-hidden');
    }

    lastScroll = currentScroll;
});

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Smooth scroll to reservation
    const reservationLink = document.querySelector('.scroll-to-reservation');
    if (reservationLink) {
        reservationLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('reservation')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

// Event booking form handler with translations
const form = document.getElementById('reservationForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Log the data (in production, this would be sent to a server)
        console.log('Event booking request:', data);

        // Get current language and translations
        const lang = window.currentLang || 'sk';
        const t = window.translations[lang];

        // Create translated confirmation message
        const eventType = data['event-type'].replace('-', ' ').toUpperCase();
        const guestCount = data['guests'];
        const eventDate = data['date'];

        const confirmMessage = `${t['confirmation-title']} ${eventType}!\n\n${t['confirmation-details']}\n${t['confirmation-date']} ${eventDate}\n${t['confirmation-guests']} ${guestCount}\n\n${t['confirmation-message']}`;

        alert(confirmMessage);

        // Reset form
        form.reset();
    });
}
