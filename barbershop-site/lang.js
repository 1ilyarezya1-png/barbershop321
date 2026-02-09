// Language translations
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
        'hero-title': 'Premium Barbershop Experience',
        'hero-subtitle': 'Where style meets tradition',
        'hero-book-now': 'Book Now',
        'about-title': 'About Our Barbershop',
        'about-text-1': 'Welcome to Elite Barbershop, where classic barbering meets modern style. Our skilled barbers bring years of experience and passion to every cut.',
        'about-text-2': 'We pride ourselves on providing exceptional service in a relaxed, professional atmosphere. Whether you\'re looking for a classic cut or a contemporary style, we\'ve got you covered.',
        'about-text-3': 'Step into our barbershop and experience the perfect blend of tradition and innovation.',
        'services-title': 'Our Top Services',
        'service-classic-title': 'Classic Cut',
        'service-classic-desc': 'Traditional barbering with modern precision',
        'service-beard-title': 'Beard Trim',
        'service-beard-desc': 'Professional beard shaping and styling',
        'service-shave-title': 'Hot Towel Shave',
        'service-shave-desc': 'Luxurious traditional straight razor shave',
        'book-now-btn': 'Book Now',
        'services-page-title': 'Our Services',
        'services-page-subtitle': 'Professional barbering services at competitive prices',
        'service-1-title': 'Classic Haircut',
        'service-1-desc': 'Traditional barbering techniques with modern precision. Perfect for those who appreciate timeless style.',
        'service-1-price': '$35',
        'service-2-title': 'Beard Trim & Shape',
        'service-2-desc': 'Professional beard shaping and styling to keep your facial hair looking sharp and well-maintained.',
        'service-2-price': '$25',
        'service-3-title': 'Hot Towel Shave',
        'service-3-desc': 'Luxurious traditional straight razor shave with hot towels and premium products for the ultimate grooming experience.',
        'service-3-price': '$45',
        'service-4-title': 'Haircut + Beard',
        'service-4-desc': 'Complete grooming package combining our classic haircut with professional beard trimming.',
        'service-4-price': '$55',
        'service-5-title': 'Fade Haircut',
        'service-5-desc': 'Modern fade styles from skin fade to low fade, expertly executed by our skilled barbers.',
        'service-5-price': '$40',
        'service-6-title': 'Hair Styling',
        'service-6-desc': 'Professional hair styling and product application to achieve your desired look.',
        'service-6-price': '$20',
        'gallery-page-title': 'Our Gallery',
        'gallery-page-subtitle': 'See our work and get inspired',
        'contact-page-title': 'Contact Us',
        'contact-page-subtitle': 'Get in touch or book your appointment',
        'contact-info-title': 'Visit Us',
        'contact-address-label': 'Address',
        'contact-address': '123 Main Street, City Center, 10001',
        'contact-phone-label': 'Phone',
        'contact-phone': '+1 (234) 567-890',
        'contact-hours-label': 'Opening Hours',
        'contact-hours': 'Monday - Friday: 9:00 AM - 7:00 PM<br>Saturday: 9:00 AM - 6:00 PM<br>Sunday: 10:00 AM - 4:00 PM',
        'booking-form-title': 'Book Your Appointment',
        'form-name': 'Name',
        'form-phone': 'Phone',
        'form-service': 'Service',
        'form-service-select': 'Select a service',
        'form-service-classic': 'Classic Haircut',
        'form-service-beard': 'Beard Trim & Shape',
        'form-service-shave': 'Hot Towel Shave',
        'form-service-haircut-beard': 'Haircut + Beard',
        'form-service-fade': 'Fade Haircut',
        'form-service-styling': 'Hair Styling',
        'form-date': 'Date',
        'form-message': 'Message (Optional)',
        'form-submit': 'Submit Booking',
        'footer-text': '© 2026 Elite Barbershop. All rights reserved.'
    },
    ro: {
        'nav-home': 'Acasă',
        'nav-services': 'Servicii',
        'nav-gallery': 'Galerie',
        'nav-contact': 'Contact',
        'hero-title': 'Experiență Premium de Frizerie',
        'hero-subtitle': 'Unde stilul întâlnește tradiția',
        'hero-book-now': 'Rezervă Acum',
        'about-title': 'Despre Frizeria Noastră',
        'about-text-1': 'Bun venit la Elite Barbershop, unde frizeria clasică întâlnește stilul modern. Frizerii noștri pricepuți aduc ani de experiență și pasiune la fiecare tunsoare.',
        'about-text-2': 'Ne mândrim cu oferirea unui serviciu excepțional într-o atmosferă relaxată și profesională. Fie că căutați o tunsoare clasică sau un stil contemporan, vă avem acoperiți.',
        'about-text-3': 'Intrați în frizeria noastră și experimentați amestecul perfect între tradiție și inovație.',
        'services-title': 'Serviciile Noastre Principale',
        'service-classic-title': 'Tunsoare Clasică',
        'service-classic-desc': 'Frizierie tradițională cu precizie modernă',
        'service-beard-title': 'Tundere Barbă',
        'service-beard-desc': 'Modelare și stilizare profesională a bărbei',
        'service-shave-title': 'Bărbierit cu Prosop Cald',
        'service-shave-desc': 'Bărbierit tradițional de lux cu brici',
        'book-now-btn': 'Rezervă Acum',
        'services-page-title': 'Serviciile Noastre',
        'services-page-subtitle': 'Servicii profesionale de frizerie la prețuri competitive',
        'service-1-title': 'Tunsoare Clasică',
        'service-1-desc': 'Tehnici tradiționale de frizerie cu precizie modernă. Perfect pentru cei care apreciază stilul atemporal.',
        'service-1-price': '150 lei',
        'service-2-title': 'Tundere și Modelare Barbă',
        'service-2-desc': 'Modelare și stilizare profesională a bărbei pentru a vă menține părul facial ascuțit și bine întreținut.',
        'service-2-price': '100 lei',
        'service-3-title': 'Bărbierit cu Prosop Cald',
        'service-3-desc': 'Bărbierit tradițional de lux cu brici, cu prosopuri calde și produse premium pentru experiența ultimă de îngrijire.',
        'service-3-price': '180 lei',
        'service-4-title': 'Tunsoare + Barbă',
        'service-4-desc': 'Pachet complet de îngrijire care combină tunsoarea noastră clasică cu tunderea profesională a bărbei.',
        'service-4-price': '220 lei',
        'service-5-title': 'Tunsoare Fade',
        'service-5-desc': 'Stiluri moderne fade de la skin fade la low fade, executate cu pricepere de frizerii noștri experimentați.',
        'service-5-price': '160 lei',
        'service-6-title': 'Coafare',
        'service-6-desc': 'Coafare profesională și aplicare de produse pentru a obține look-ul dorit.',
        'service-6-price': '80 lei',
        'gallery-page-title': 'Galeriile Noastre',
        'gallery-page-subtitle': 'Vedeți munca noastră și lăsați-vă inspirat',
        'contact-page-title': 'Contactați-ne',
        'contact-page-subtitle': 'Luați legătura sau rezervați-vă programarea',
        'contact-info-title': 'Vizitați-ne',
        'contact-address-label': 'Adresă',
        'contact-address': 'Strada Principală 123, Centrul Orașului, 10001',
        'contact-phone-label': 'Telefon',
        'contact-phone': '+1 (234) 567-890',
        'contact-hours-label': 'Program',
        'contact-hours': 'Luni - Vineri: 9:00 - 19:00<br>Sâmbătă: 9:00 - 18:00<br>Duminică: 10:00 - 16:00',
        'booking-form-title': 'Rezervați-vă Programarea',
        'form-name': 'Nume',
        'form-phone': 'Telefon',
        'form-service': 'Serviciu',
        'form-service-select': 'Selectați un serviciu',
        'form-service-classic': 'Tunsoare Clasică',
        'form-service-beard': 'Tundere și Modelare Barbă',
        'form-service-shave': 'Bărbierit cu Prosop Cald',
        'form-service-haircut-beard': 'Tunsoare + Barbă',
        'form-service-fade': 'Tunsoare Fade',
        'form-service-styling': 'Coafare',
        'form-date': 'Data',
        'form-message': 'Mesaj (Opțional)',
        'form-submit': 'Trimite Rezervarea',
        'footer-text': '© 2026 Elite Barbershop. Toate drepturile rezervate.'
    },
    ru: {
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-gallery': 'Галерея',
        'nav-contact': 'Контакты',
        'hero-title': 'Премиальный Опыт Барбершопа',
        'hero-subtitle': 'Где стиль встречается с традицией',
        'hero-book-now': 'Записаться',
        'about-title': 'О Нашем Барбершопе',
        'about-text-1': 'Добро пожаловать в Elite Barbershop, где классическая барберинг встречается с современным стилем. Наши опытные барберы привносят годы опыта и страсти в каждую стрижку.',
        'about-text-2': 'Мы гордимся предоставлением исключительного сервиса в расслабленной, профессиональной атмосфере. Ищете ли вы классическую стрижку или современный стиль, мы поможем вам.',
        'about-text-3': 'Зайдите в наш барбершоп и испытайте идеальное сочетание традиции и инноваций.',
        'services-title': 'Наши Топовые Услуги',
        'service-classic-title': 'Классическая Стрижка',
        'service-classic-desc': 'Традиционный барберинг с современной точностью',
        'service-beard-title': 'Стрижка Бороды',
        'service-beard-desc': 'Профессиональное формирование и стилизация бороды',
        'service-shave-title': 'Бритьё Горячим Полотенцем',
        'service-shave-desc': 'Роскошное традиционное бритьё опасной бритвой',
        'book-now-btn': 'Записаться',
        'services-page-title': 'Наши Услуги',
        'services-page-subtitle': 'Профессиональные услуги барберинга по конкурентным ценам',
        'service-1-title': 'Классическая Стрижка',
        'service-1-desc': 'Традиционные техники барберинга с современной точностью. Идеально для тех, кто ценит вневременной стиль.',
        'service-1-price': '2500 ₽',
        'service-2-title': 'Стрижка и Формирование Бороды',
        'service-2-desc': 'Профессиональное формирование и стилизация бороды для поддержания острого и ухоженного вида вашей бороды.',
        'service-2-price': '1800 ₽',
        'service-3-title': 'Бритьё Горячим Полотенцем',
        'service-3-desc': 'Роскошное традиционное бритьё опасной бритвой с горячими полотенцами и премиальными продуктами для идеального опыта ухода.',
        'service-3-price': '3200 ₽',
        'service-4-title': 'Стрижка + Борода',
        'service-4-desc': 'Полный пакет ухода, сочетающий нашу классическую стрижку с профессиональной стрижкой бороды.',
        'service-4-price': '3900 ₽',
        'service-5-title': 'Фейд Стрижка',
        'service-5-desc': 'Современные стили фейд от скин фейд до лоу фейд, мастерски выполненные нашими опытными барберами.',
        'service-5-price': '2800 ₽',
        'service-6-title': 'Укладка Волос',
        'service-6-desc': 'Профессиональная укладка волос и нанесение продуктов для достижения желаемого образа.',
        'service-6-price': '1400 ₽',
        'gallery-page-title': 'Наша Галерея',
        'gallery-page-subtitle': 'Посмотрите нашу работу и вдохновитесь',
        'contact-page-title': 'Свяжитесь с Нами',
        'contact-page-subtitle': 'Свяжитесь с нами или запишитесь на приём',
        'contact-info-title': 'Посетите Нас',
        'contact-address-label': 'Адрес',
        'contact-address': 'Главная улица, 123, Центр города, 10001',
        'contact-phone-label': 'Телефон',
        'contact-phone': '+1 (234) 567-890',
        'contact-hours-label': 'Часы Работы',
        'contact-hours': 'Понедельник - Пятница: 9:00 - 19:00<br>Суббота: 9:00 - 18:00<br>Воскресенье: 10:00 - 16:00',
        'booking-form-title': 'Записаться на Приём',
        'form-name': 'Имя',
        'form-phone': 'Телефон',
        'form-service': 'Услуга',
        'form-service-select': 'Выберите услугу',
        'form-service-classic': 'Классическая Стрижка',
        'form-service-beard': 'Стрижка и Формирование Бороды',
        'form-service-shave': 'Бритьё Горячим Полотенцем',
        'form-service-haircut-beard': 'Стрижка + Борода',
        'form-service-fade': 'Фейд Стрижка',
        'form-service-styling': 'Укладка Волос',
        'form-date': 'Дата',
        'form-message': 'Сообщение (Необязательно)',
        'form-submit': 'Отправить Заявку',
        'footer-text': '© 2026 Elite Barbershop. Все права защищены.'
    }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('language') || 'en';

    // Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else if (key === 'contact-hours') {
                // Handle HTML content for opening hours
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});
