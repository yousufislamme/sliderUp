var mySwiper = new Swiper('.swiper-container', {

    speed: 400,
    spaceBetween: 100,
    setWrapperSize: true,
    effect: "coverflow",
    stopOnLastSlide: true,
    // Optional parameters
    direction: 'vertical',
    loop: true,
    setWrapperSize: true,


      // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 10,
        clickable: true,
  },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
         
      },

      autoplay: {
        delay: 3000,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
});


