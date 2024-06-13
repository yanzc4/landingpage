const banner = new Swiper('#empresas', {
    slidesPerView: 5,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

