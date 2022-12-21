// Initialize Swiper
new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Курсор перетаскивания
    grabCursor: true,
    // Переключение при клике на слайд
    slideToClickedSlide: true,
    // Количество слайдов для показа
    slidesPerView: 1,
    // Отступ между слайдами

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 28,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,

        }
    }
});
new swiperTeam('.swiperttest')
