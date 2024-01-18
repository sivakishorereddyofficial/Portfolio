/*======= Typed Js: Multiple Text tying and deleting format =======*/
var typed = new Typed(".multiple-text", {
  strings: ["Java Developer","Frontend Developer","Cloud Engineer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true 
})

/*======= toggle icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*======= Scroll Sections active link =======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height= sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    };
  });

  /*======= Sticky navbar =======*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*======= remove toggle icon and navbar when click navbar link (scroll)=======*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/*======= scroll reveal =======*/
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .about-content, .education-container1, .education-container, .projects-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*======= Show Popups =======*/
const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.show-popup-container');
const closeButton = document.querySelector('.close-button');

showPopup.onclick = () => {
  popupContainer.classList.add('active');
}

closeButton .onclick = () => {
  popupContainer.classList.remove ('active');
}