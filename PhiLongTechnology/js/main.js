$(document).ready(function() {
    $(".menu li").hover(function() {
        $(this).find("ul:first").slideDown(500);
    }, function() {
        $(this).find("ul:first").hide(300);
    });
});

/* 1 of 4 : SWIPER ################################### */
var mySwiper = new Swiper(".swiper-container", {
    // If swiper loop is true set photoswipe counterEl: false (line 175 her)
    loop: true,
    /* slidesPerView || auto - if you want to set width by css like flickity.js layout - in this case width:80% by CSS */
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: false,
    autoplay: { /* remove/comment to stop autoplay  */
        delay: 3000,
        disableOnInteraction: false /* true by deafult */
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    // keyboard control
    keyboard: {
        enabled: true,
    }
});