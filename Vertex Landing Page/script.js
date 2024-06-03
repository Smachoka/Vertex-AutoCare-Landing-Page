const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Hide menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*swiper popular*/
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween:24,
  slidesPerview: 'auto',
  grabCursor: true,


  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerview: 3,
    

    },
    1024: {
    
      spaceBetween: 48,
    }
  }
});

/*scrollup*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollUp>=350)
     scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*scrollReveal*/
    // Initialize ScrollReveal
    const sr =ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2500,
      delay: 400,
      //reset: true,
      
    })
    sr.reveal('.home__title, .popular__container')
    sr.reveal('.home__subtitle',{delay:500})
    sr.reveal('.home__elec',{delay:600})
    sr.reveal('.home__img',{delay:800})
    sr.reveal('.home__car-data',{delay:900, interval:100, origin:'bottom'})
    sr.reveal('.home__button',{delay:1000, origin:'bottom'})
    sr.reveal('.about__group, .offer__data',{origin:'left'})
    sr.reveal('.about__data, .offer__img',{ origin:'right'})
    sr.reveal('.logos__content, .footer__content',{interval:100})
