document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    document.getElementById('rightButton').addEventListener('click', () => {
        index = (index + 1) % totalItems;
        updateCarousel();
    });

    document.getElementById('leftButton').addEventListener('click', () => {
        index = (index - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});
