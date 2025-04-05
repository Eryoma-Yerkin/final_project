function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const activeItem = carousel.querySelector('.carousel-item.active');
    let activeIndex = Array.from(items).indexOf(activeItem);
    activeIndex = (activeIndex + direction + items.length) % items.length;

    // Сдвигаем карусель
    carousel.querySelector('.carousel-inner').style.transform = `translateX(-${activeIndex * 100}%)`;

    // Обновляем активный элемент
    items.forEach(item => item.classList.remove('active'));
    items[activeIndex].classList.add('active');
  }