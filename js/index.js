
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.testimonials-section__swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});