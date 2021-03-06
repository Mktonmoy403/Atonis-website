$(document).ready(function() {
    $('.project-popup').magnificPopup({
        type:'image' ,
        gallery:{
            enabled:true
        },
    });

    $('.video').magnificPopup({
        type:'iframe' ,
        autoplay: true
        
    });

    $('.counter').counterUp();

    $('.testimonials').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-circle-right"></i></button>'
    });
});