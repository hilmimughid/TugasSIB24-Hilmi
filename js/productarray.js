let gridContainer = document.querySelector(".grid-container");

let images = ["images/hilmi.jpg", "images/patrick.jpg", "images/jensen.jpg", "images/tim.jpg", "images/amon.png", "images/wei.jpg"]
let names = ["Hilmi Mughid", "Patrick P. Gelsinger", "Jensen Huang", "Tim Cook", "Cristiano Amon", "C. C. Wei",]

for (let i = 0; i < names.length; i++) {
    let div = document.createElement("div");
    div.className = "card-container";

    let img = document.createElement("img");
    img.className = "card-images";
    img.src = images[i];

    let h3 = document.createElement("h3");
    h3.className = "card-texts";
    h3.textContent = names[i]

    gridContainer.appendChild(div);
    div.appendChild(img);
    div.appendChild(h3);
}
