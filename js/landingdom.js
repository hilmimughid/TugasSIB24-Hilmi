// Membuat tag html untuk carousel
let carouselContainer = document.querySelector(".carousel-container");

let links = ["form.html", "", "jsdasar.html"];
let imagesSrc = ["images/html5.jpg", "images/css.png", "images/js.png"];

for (let i = 0; i < 3; i++) {
    let div = document.createElement("div");
    div.className = "carousel-contents";

    let anchor = document.createElement("a");
    anchor.href = links[i];
    anchor.target = "_blank";

    let images = document.createElement("img");
    images.className = "carousel-pictures";
    images.src = imagesSrc[i];

    anchor.appendChild(images);
    div.appendChild(anchor);
    carouselContainer.appendChild(div);
}

let prev = document.createElement("a");
prev.className = "prev";
prev.innerHTML = "&#10094;";
prev.onclick = function() { nextCarousel(-1); };
carouselContainer.appendChild(prev);

let next = document.createElement("a");
next.className = "next";
next.innerHTML = "&#10095;";
next.onclick = function() { nextCarousel(1); };
carouselContainer.appendChild(next);

// Fungsi animasi carousel
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
