// (function() {

//     const slides = [
//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/consultations.png" alt="plant in a pot icon">
//         </div>`,

//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/plant-food.png" alt="plant in a pot icon">
//         </div>`,

//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/plants-for-garden.png" alt="cactus in a pot icon">
//         </div>`,

//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/plants-for-home.png" alt="flower in a pot icon">
//         </div>`,

//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/sale-of-flowerpots.png" alt="plant in a pot icon">
//         </div>`,

//         `<div class="products-slides__carousel-slide">
//         <img class="products-slides__carousel-slide-img" src="img/products-slides/soil-for-plants.png" alt="flower in a pot icon">
//         </div>`
//     ]

//     let currentSlideIdx = 0;

//     function showCurrentSlide() {
//         const slideContainer = document.querySelector('.products-slides__carousel-slide-container');
//         slideContainer.innerHTML = slides[currentSlideIdx];
//     }

//     function showNextSlide() {
//         currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
//         showCurrentSlide();
//     }

//     function showPrevSlide() {
//         currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
//         showCurrentSlide();
//     }

//     showCurrentSlide();

//     document.querySelector('.products-slides__carousel-next')
//          .addEventListener('click', showNextSlide);

//     document.querySelector('.products-slides__carousel-prev')
//          .addEventListener('click', showPrevSlide);

//     setInterval(showNextSlide, 3000);

// })();


// (function() {
//     const slides = [
//         `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/plants-for-home.png" alt="plants-for-home">
//         <h3 class="products-slides__title">Plants for Home</h3>
//         <p class="products-slides__text">We offer a huge selection of flowers and evergreens that will be a joy to see for many years. 
//             A charming plant will be a great addition to the interior.</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`,

//     `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/plants-for-garden.png" alt="plants-for-garden">
//         <h3 class="products-slides__title">Plants for Garden</h3>
//         <p class="products-slides__text">Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, 
//             both in the form of seeds, and already sprouted.</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`,

//     `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/sale-of-flowerpots.png" alt="sale-of-flowerpots">
//         <h3 class="products-slides__title">Sale of Flowerpots</h3>
//         <p class="products-slides__text">Purchase flowerpots for plants of any type, from small flowers to huge palm trees. 
//             Our store offers only quality flowerpots from trusted manufacturers.</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`,

//     `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/soil-for-plants.png" alt="soil-for-plants">
//         <h3 class="products-slides__title">Soil for Plants</h3>
//         <p class="products-slides__text">It's not easy to find quality soil in New York. We offer the best options for your plants. 
//             The soil we sell is decontaminated and enriched with nutrients.</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`,

//     `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/plant-food.png" alt="plant-food">
//         <h3 class="products-slides__title">Plant Food</h3>
//         <p class="products-slides__text">We offer everything you need to care for plants. 
//             Here you'll find a wide selection of fertilizers and medicinal products to combat flower diseases.</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`,

//     `<article class="products-slides__card">
//         <img class="products-slides__image" src="img/products-slides/consultations.png" alt="consultations">
//         <h3 class="products-slides__title">Consultations</h3>
//         <p class="products-slides__text">We not only sell plants and everything related to them 
//             but are also ready to answer any of your questions! Contact us to select the best plant!</p>
//         <a href="#" class="products-slides__learn-more">Learn More</a>
//     </article>`
//     ]

//     let currentSlideIdx = 0;

//     function showCurrentSlide() {
//         const slideContainer = documents.querySelector('.products-slides__carousel-slide-container');
//         slideContainer.innerHTML = slides[currentSlideIdx];
//     }


//     function showNextSlide() {
//                  currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
//                 showCurrentSlide();
//     }

//     showCurrentSlide();
    
//     setInterval(showNextSlide, 3000);
// })


(function() {
    const slides = [
        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/plants-for-home.png" alt="plants-for-home">
            <h3 class="products-slides__title">Plants for Home</h3>
            <p class="products-slides__text">We offer a huge selection of flowers and evergreens that will be a joy to see for many years. 
                A charming plant will be a great addition to the interior.</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`,

        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/plants-for-garden.png" alt="plants-for-garden">
            <h3 class="products-slides__title">Plants for Garden</h3>
            <p class="products-slides__text">Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, 
                both in the form of seeds, and already sprouted.</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`,

        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/sale-of-flowerpots.png" alt="sale-of-flowerpots">
            <h3 class="products-slides__title">Sale of Flowerpots</h3>
            <p class="products-slides__text">Purchase flowerpots for plants of any type, from small flowers to huge palm trees. 
                Our store offers only quality flowerpots from trusted manufacturers.</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`,

        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/soil-for-plants.png" alt="soil-for-plants">
            <h3 class="products-slides__title">Soil for Plants</h3>
            <p class="products-slides__text">It's not easy to find quality soil in New York. We offer the best options for your plants. 
                The soil we sell is decontaminated and enriched with nutrients.</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`,

        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/plant-food.png" alt="plant-food">
            <h3 class="products-slides__title">Plant Food</h3>
            <p class="products-slides__text">We offer everything you need to care for plants. 
                Here you'll find a wide selection of fertilizers and medicinal products to combat flower diseases.</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`,

        `<article class="products-slides__card">
            <img class="products-slides__image" src="img/products-slides/consultations.png" alt="consultations">
            <h3 class="products-slides__title">Consultations</h3>
            <p class="products-slides__text">We not only sell plants and everything related to them 
                but are also ready to answer any of your questions! Contact us to select the best plant!</p>
            <a href="#" class="products-slides__learn-more">Learn More</a>
        </article>`
    ]

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products-slides__carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 640) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 960) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                if (window.innerWidth >= 1200) {
                    const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
                    slideContainer.innerHTML += slides[fourthSlideIdx];
                }
            }
        }
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

    document.querySelector('.products-slides__carousel-next').addEventListener('click', showNextSlide);

    document.querySelector('.products-slides__carousel-prev').addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000);

    window.addEventListener('resize', showCurrentSlide);

})();