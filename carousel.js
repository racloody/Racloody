document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const captions = [
        'Téo le plus bo',
        'Le lycée, une belle image volée par mes soins',
        'Moi en beaucoup trop gros'
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
