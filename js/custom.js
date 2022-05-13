//OFFCANVAS NAV BAR
$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
})


//OWL CAROUSEL
$('.owl-carousel').owlCarousel({
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');
