$(document).ready(function () {
    // PROJECT SLIDER
    $('#product-slider').owlCarousel({
        loop: true,
        items: 3,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            575: { items: 2, margin: 0 },
            765: { items: 2, margin: 20 },
            1000: {
                items: 3,
                margin: 20,
            },
            1200: {
                items: 3,
                margin: 60,
            },
        },
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.2,
    }
);

const animationElement = document.querySelectorAll('.animation');
animationElement.forEach((el) => observer.observe(el));
