$(document).ready(function () {
    $('.carousel-images').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="carousel-button prev">&#10094;</button>',
        nextArrow: '<button class="carousel-button next">&#10095;</button>',
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const captions = [
        'Caption for Photo 1',
        'Caption for Photo 2',
        'Caption for Photo 3'
    ];
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const caption = document.getElementById('caption');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
        caption.textContent = captions[currentIndex];
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    updateCarousel();
});
