// Navigation hide on scroll - Clean version
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

// Smooth scroll to reservation
document.addEventListener('DOMContentLoaded', () => {
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
        const lang = window.currentLang || 'en';
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
