let slide = 0;

const slides = document.getElementsByClassName("main__slider-item");

document.getElementsByClassName("slider__arrow-left")[0].addEventListener("click", function(e) {
    e.preventDefault()

    if (slide > 0) {
        slides[slide].classList.remove("main__slider-item--active");
        slide--;
        slides[slide].classList.add("main__slider-item--active");
        console.log(slide) 
    } else {
        slide = 0;
    }    
});

document.getElementsByClassName("slider__arrow-right")[0].addEventListener("click", function(e) {
    e.preventDefault()

    if (slide < (slides.length - 1)) {
        slides[slide].classList.remove("main__slider-item--active");
        slide++;
        slides[slide].classList.add("main__slider-item--active");
        console.log(slide)
    }    
});
