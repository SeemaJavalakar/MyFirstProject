let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

const swiper = new Swiper('.course-slider', {
  // Optional parameters

  loop: true,
  spaceBetween : 20,
  grabCursor : true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },
   breakpoints: {
        540: {
          slidesPerView: 1,    
        },
        768: {
          slidesPerView: 2,  
        },
        1024: {
          slidesPerView: 3,
        },
      }


});

const reviewswiper = new Swiper('.reviews-slider', {
  // Optional parameters

  loop: true,
  spaceBetween : 20,
  grabCursor : true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },
   breakpoints: {
        540: {
          slidesPerView: 1,    
        },
        768: {
          slidesPerView: 2,  
        },
        1024: {
          slidesPerView: 3,
        },
      }


});

const swiper2 = new Swiper('.teacher-slider', {
  // Optional parameters

  loop: true,
  spaceBetween : 20,
  grabCursor : true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },
   breakpoints: {
        540: {
          slidesPerView: 1,    
        },
        768: {
          slidesPerView: 2,  
        },
        1024: {
          slidesPerView: 3,
        },
      }


});


