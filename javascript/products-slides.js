(function() {

    const slides = [
        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/consultations.png" alt="plant in a pot icon">
        <h3 class="products-slides__title">Consultations</h3>
            <p class="products-slides__text">We not only sell plants and everything related to them 
                but are also ready to answer any of your questions! Contact us to select the best plant!</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </div>`,

        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/plant-food.png" alt="plant in a pot icon">
        </div>`,

        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/plants-for-garden.png" alt="cactus in a pot icon">
        </div>`,

        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/plants-for-home.png" alt="flower in a pot icon">
        </div>`

        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/sale-of-flowerpots.png" alt="plant in a pot icon">
        </div>`

        `<div class="products-slides__carousel-slide">
        <img class="products-slides__carousel-slide-img" src="img/products-slides/soil-for-plants.png" alt="flower in a pot icon">
        </div>`
    ]

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-slides__carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.products-slides__carousel-next')
         .addEventListener('click', showNextSlide);

    document.querySelector('.products-slides__carousel-prev')
         .addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000);

})();