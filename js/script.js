// Carousel
let carouselIndex = 1;
displayCarousel(carouselIndex);

function nextCarousel(a) {
    displayCarousel(carouselIndex += a);
}

function displayCarousel(a) {
    let i;
    let carousels = document.getElementsByClassName("carousel-contents");
    if (a > carousels.length) { carouselIndex = 1 }
    if (a < 1) { carouselIndex = carousels.length }
    for (i = 0; i < carousels.length; i++) {
        carousels[i].style.display = "none";
    }
    carousels[carouselIndex - 1].style.display = "block";
}

// Responsive Navbar
function responsiveNav() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}