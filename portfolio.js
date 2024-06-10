/* ==================== toggle icon navbar ===============*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ==================== toggle icon navbar ===============*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec =>  {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                navLinks.classList.remove('click');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ==================== sticky navbar ===============*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ==================== remove toggle icon and navbar ===============*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

/* ==================== remove toggle icon and navbar ===============*/

ScrollReveal ({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-contact,heading', {origin: 'top' });
ScrollReveal().reveal('.home-contact p, .about-content' );

/* ==================== Types JS ===============*/
const typed = new Typed('.multiple-text', {
    strings: [' Frontend Developer', ' Web Designer'],
    typeSpeed : 70,
    backSpace : 70,
    backDelay: 1000,
    loop : true,
});