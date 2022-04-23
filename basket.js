const basketItem = document.getElementsByClassName("shop-list")[0];

document.getElementsByClassName("topMenu__basketLink")[0].addEventListener("click", function() {
  basketItem.classList.toggle('shop-list--active');
});