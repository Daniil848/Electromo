let slideIndex = 0;

const slides = document.getElementsByClassName("main__slider-item");

document.getElementsByClassName("slider__arrow-left")[0].addEventListener("click", function(e) {
    e.preventDefault()

    if (slideIndex > 0) {
        slides[slideIndex].classList.remove("main__slider-item--active");
        slideIndex--;
        slides[slideIndex].classList.add("main__slider-item--active"); 

        clearInterval(interval)
    } 
    
    
});

document.getElementsByClassName("slider__arrow-right")[0].addEventListener("click", function(e) {
    e.preventDefault()

    if (slideIndex < (slides.length - 1)) {
        slides[slideIndex].classList.remove("main__slider-item--active");
        slideIndex++;
        slides[slideIndex].classList.add("main__slider-item--active");
 
        clearInterval(interval)
    }    
});

function sliderSwipAuto() {

    if ( slideIndex === (slides.length - 1) ) {
    slides[slideIndex].classList.remove('main__slider-item--active');
    slideIndex = 0
    slides[slideIndex].classList.add('main__slider-item--active');
    } else {
    slides[slideIndex].classList.remove('main__slider-item--active');
    slideIndex++;
    slides[slideIndex].classList.add('main__slider-item--active');
    }
}

const interval = setInterval(sliderSwipAuto, 4000);