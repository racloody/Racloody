document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Portfolio/Logo/logo1.png',
        'Portfolio/Logo/logo2.png',
        'Portfolio/Logo/logo3.png',
        'Portfolio/Logo/logo4.png',
        'Portfolio/Logo/logo5.png',
        'Portfolio/Logo/logo6.png',
        'Portfolio/Logo/logo7.png',
        'Portfolio/Logo/logo8.png',
        'Portfolio/Logo/logo9.png',
        'Portfolio/Logo/logo10.png',
        'Portfolio/Logo/logo11.png',
        'Portfolio/Logo/logo12.png',
        'Portfolio/Logo/logo13.png'
    ];
    const captions = [
        'Logo 1',
        'Logo 2',
        'Logo 3',
        'Logo 4',
        'Logo 5',
        'Logo 6',
        'Logo 7',
        'Logo 8',
        'Logo 9',
        'Logo 10',
        'Logo 11',
        'Logo 12',
        'Logo 13'
    ];
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const caption = document.getElementById('caption');
    const carouselBox = document.querySelector('.box-carousel');
    const carouselImagesContainer = document.querySelector('.carousel-images');
    let currentIndex = 0;

    // Add images to the carousel
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = captions[index];
        img.classList.add('carousel-image');
        carouselImagesContainer.appendChild(img);
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselImagesContainer.style.transform = `translateX(${offset}%)`;
        caption.textContent = captions[currentIndex];
    }

    function updateBoxSize() {
        const activeImage = document.querySelectorAll('.carousel-image')[currentIndex];
        const ratio = 1; // Maintain a 1:1 aspect ratio
        carouselBox.style.height = `${carouselBox.offsetWidth / ratio}px`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    window.addEventListener('resize', updateBoxSize);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevButton.click();
        } else if (event.key === 'ArrowRight') {
            nextButton.click();
        }
    });

    updateCarousel();
    updateBoxSize();
});
