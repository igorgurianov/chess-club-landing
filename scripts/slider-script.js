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
        319: {
            slidesPerView: 1,
            spaceBetween: 28,
        },
        767: {
            slidesPerView: 2.0068,
            spaceBetween: 28,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,

        }
    }
});
