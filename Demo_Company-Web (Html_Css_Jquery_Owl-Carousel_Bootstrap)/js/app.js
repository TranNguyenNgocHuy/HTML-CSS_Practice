$(document).ready(function () {
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        navText: ['PREV', 'NEXT'],
        responsive: {
            0: { nav: false },
            770: { nav: true },
        },
    });

    // PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 4,
        smartSpeed: 1000,
        nav: false,
        responsive: {
            0: { items: 1, margin: 0 },
            815: { items: 2 },
            1140: {
                items: 3,
                center: true,
            },
        },
    });

    // Reviews SLIDER
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        items: 1,
    });
});
