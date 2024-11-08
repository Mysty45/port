// Инициализация текущего индекса слайда для каждого слайдера
let currentIndex = 0;

function showSlides(sliderClass, direction) {
    const slider = document.querySelector(`.${sliderClass} .slides`);
    const slides = slider.children;
    const totalSlides = slides.length;

    // Обновление индекса текущего слайда
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Позиция слайда по оси X
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Функции для обработки нажатия кнопок "предыдущий" и "следующий"
document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', () => {
        showSlides(button.parentElement.classList[0], -1);
    });
});

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        showSlides(button.parentElement.classList[0], 1);
    });
});
