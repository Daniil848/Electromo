const productWidth = document.querySelector(".product__box");
const productMargin = parseInt(getComputedStyle(productWidth).marginRight);
const productSize = productWidth.offsetWidth + productMargin
const product = document.querySelector(".product")


document.getElementsByClassName("latest__angle-up")[0].addEventListener("click", function(e) {
    e.preventDefault()
    
    product.scrollBy({
        left: -productSize,
        behavior: 'smooth' 
    });
});

document.getElementsByClassName("latest__angle-down")[0].addEventListener("click", function(e) {
    e.preventDefault()
    
    product.scrollBy({
        left: productSize,
        behavior: 'smooth' 
    });
});

console.log(productSize)