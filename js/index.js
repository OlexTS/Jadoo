
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.testimonials-section__swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination--box1',
      clickable: true,
    },
  });
  const swiper1 = new Swiper('.testimonials-section__box-2-swiper', {
    direction: 'vertical',
    loop: true,
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // spaceBetween: 20,
   
    navigation: {
      nextEl: '.swiper-button-next--box2',
      prevEl: '.swiper-button-prev--box2',
    },
    
  });
});

