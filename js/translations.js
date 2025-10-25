// Translations for English and Slovak
const translations = {
    en: {
        // Navigation
        'nav-home': 'HOME',
        'nav-menu': 'MENU',
        'nav-suppliers': 'SUPPLIERS',
        'nav-gallery': 'GALLERY',
        'nav-reservation': 'RESERVATION',
        'nav-contact': 'CONTACT',

        // Page titles
        'menu-title': 'MENU',
        'suppliers-title': 'OUR SUPPLIERS',
        'gallery-title': 'GALLERY',
        'contact-title': 'CONTACT',
        'reservation-title': 'RESERVE A TABLE',

        // Homepage sections
        'home-menu-title': 'MENU',
        'home-suppliers-title': 'OUR SUPPLIERS',
        'home-gallery-title': 'GALLERY',
        'btn-view': 'VIEW',

        // Menu tabs
        'tab-breakfast': 'BREAKFAST/BRUNCH',
        'tab-weekly': 'WEEKLY MENU',
        'tab-main': 'MENU',
        'tab-drinks': 'DRINKS',

        // Event booking form (homepage)
        'event-title': 'BOOK AN EVENT',
        'label-event-type': 'EVENT TYPE',
        'option-select': 'Select',
        'option-breakfast': 'Breakfast Catering',
        'option-catering': 'Catering',
        'option-celebration': 'Celebration',
        'label-name': 'NAME',
        'label-company': 'COMPANY / ORGANIZATION (OPTIONAL)',
        'label-email': 'EMAIL',
        'label-phone': 'PHONE',
        'label-date': 'EVENT DATE',
        'label-time': 'PREFERRED TIME',
        'label-guests': 'NUMBER OF GUESTS',
        'option-select-guests': 'Select',
        'people': 'People',
        'label-location': 'EVENT LOCATION',
        'option-select-location': 'Select Location',
        'option-your-venue': 'Your Venue',
        'option-our-space': 'Our Space',
        'label-details': 'EVENT DETAILS & SPECIAL REQUESTS',
        'placeholder-details': 'Tell us about your event, dietary requirements, preferred menu style, etc.',
        'btn-submit': 'SUBMIT REQUEST',

        // Contact page headings
        'contact-address': 'ADDRESS',
        'contact-phone': 'PHONE',
        'contact-email': 'EMAIL',
        'contact-hours-title': 'OPENING HOURS',
        'contact-follow': 'FOLLOW US',
        'contact-hours-weekdays': 'Monday – Friday: 11:00 – 22:00',
        'contact-hours-weekend': 'Saturday – Sunday: 12:00 – 23:00',
        'contact-hours-closed': 'Closed on public holidays',
        'social-instagram': 'Instagram',
        'social-facebook': 'Facebook',

        // Footer
        'footer-contact': 'Contact',
        'footer-hours': 'Mon–Fri 11:00–22:00, Sat–Sun 12:00–23:00',

        // Confirmation message
        'confirmation-title': 'Thank you for your',
        'confirmation-details': 'Event Details:',
        'confirmation-date': 'Date:',
        'confirmation-guests': 'Guests:',
        'confirmation-message': 'We will contact you within 24 hours to confirm availability and discuss details.'
    },
    sk: {
        // Navigation
        'nav-home': 'DOMOV',
        'nav-menu': 'MENU',
        'nav-suppliers': 'DODÁVATELIA',
        'nav-gallery': 'GALÉRIA',
        'nav-reservation': 'REZERVÁCIA',
        'nav-contact': 'KONTAKT',

        // Page titles
        'menu-title': 'MENU',
        'suppliers-title': 'NAŠI DODÁVATELIA',
        'gallery-title': 'GALÉRIA',
        'contact-title': 'KONTAKT',
        'reservation-title': 'REZERVÁCIA STOLA',

        // Homepage sections
        'home-menu-title': 'MENU',
        'home-suppliers-title': 'NAŠI DODÁVATELIA',
        'home-gallery-title': 'GALÉRIA',
        'btn-view': 'ZOBRAZIŤ',

        // Menu tabs
        'tab-breakfast': 'RAŇAJKY/BRUNCH',
        'tab-weekly': 'TÝŽDENNÉ MENU',
        'tab-main': 'MENU',
        'tab-drinks': 'NÁPOJE',

        // Event booking form (homepage)
        'event-title': 'REZERVOVAŤ PODUJATIE',
        'label-event-type': 'TYP PODUJATIA',
        'option-select': 'Vybrať',
        'option-breakfast': 'Raňajkový catering',
        'option-catering': 'Catering',
        'option-celebration': 'Oslava',
        'label-name': 'MENO',
        'label-company': 'FIRMA / ORGANIZÁCIA (NEPOVINNÉ)',
        'label-email': 'EMAIL',
        'label-phone': 'TELEFÓN',
        'label-date': 'DÁTUM PODUJATIA',
        'label-time': 'PREFEROVANÝ ČAS',
        'label-guests': 'POČET HOSTÍ',
        'option-select-guests': 'Vybrať',
        'people': 'Ľudí',
        'label-location': 'MIESTO PODUJATIA',
        'option-select-location': 'Vyberte miesto',
        'option-your-venue': 'Vaše miesto',
        'option-our-space': 'Náš priestor',
        'label-details': 'DETAILY PODUJATIA & ŠPECIÁLNE POŽIADAVKY',
        'placeholder-details': 'Povedzte nám o vašom podujatí, dietetických požiadavkách, preferovanom štýle menu atď.',
        'btn-submit': 'ODOSLAŤ ŽIADOSŤ',

        // Contact page headings
        'contact-address': 'ADRESA',
        'contact-phone': 'TELEFÓN',
        'contact-email': 'EMAIL',
        'contact-hours-title': 'OTVÁRACIE HODINY',
        'contact-follow': 'SLEDUJTE NÁS',
        'contact-hours-weekdays': 'Pondelok – Piatok: 11:00 – 22:00',
        'contact-hours-weekend': 'Sobota – Nedeľa: 12:00 – 23:00',
        'contact-hours-closed': 'Zatvorené počas štátnych sviatkov',
        'social-instagram': 'Instagram',
        'social-facebook': 'Facebook',

        // Footer
        'footer-contact': 'Kontakt',
        'footer-hours': 'Pon–Pia 11:00–22:00, So–Ne 12:00–23:00',

        // Confirmation message
        'confirmation-title': 'Ďakujeme za vašu žiadosť o',
        'confirmation-details': 'Detaily podujatia:',
        'confirmation-date': 'Dátum:',
        'confirmation-guests': 'Hostia:',
        'confirmation-message': 'Kontaktujeme vás do 24 hodín, aby sme potvrdili dostupnosť a prebrali detaily.'
    }
};

// Get current language from localStorage or default to SLOVAK
let currentLang = localStorage.getItem('language') || 'sk';

// Function to translate the page
function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Translate page to current language
    translatePage(currentLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
});

// Export for use in other scripts
window.translations = translations;
window.currentLang = currentLang;
window.translatePage = translatePage;
