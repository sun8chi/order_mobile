window.onload = function() {
    var mySwiper = new Swiper('.home-slider', {
        loop: true,
        pagination: '.swiper-pagination',
    });
    var mySwiper = new Swiper('.swiper-cate', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 10
    });
    var mySwiper = new Swiper('.swiper-links', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 10
    });
    var mySwiper = new Swiper('.swiper-food', {
        loop: true,
        pagination: '.swiper-pagination',
    });
}

