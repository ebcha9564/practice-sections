var swiper = new Swiper(".mySwiper-1", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 1100,
    on: {
        slideChange: function () {
            // Get all text elements
            const texts = document.querySelectorAll('.slide-text');
            // Remove active class from all
            texts.forEach(text => text.classList.remove('active'));
            // Add active class to current slide's text
            texts[this.activeIndex].classList.add('active');
        }
    }
});