 /*================ toggle icon navbar ================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

 /*================ scroll sections active link ================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================ sticky navbar ================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================ remove toggle icon and navbar when click navbar liink (scroll)================= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*================ scroll reveal ================= */
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.inicio-content, .heading', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-img, .servicos-container, .portfolio-box, .contato form', { origin: 'top' });
ScrollReveal().reveal('.inicio-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.inicio-content p, .sobre-content', { origin: 'right' });


/*================ typed js ================= */
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvimento Web', 'Suporte Técnico', 'Redes e Infraestrutura'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
