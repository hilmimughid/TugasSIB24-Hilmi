let endpoint = 'https://reqres.in/api/users?page=1'
let get = document.getElementById('getContent')

// Metode GET
fetch(endpoint)
    .then((res) => res.json())
    .then((response) => {
        console.log("Console log metode GET:", response)
        response.data.forEach(element => {
            get.innerHTML += `
            <div class="card-container">
                <img class="card-images" src="${element.avatar}">
                <h3 class="card-texts">${element.first_name} ${element.last_name}</h3>
            </div>
            `
        });
    })

// Metode POST
let data = {
    data: [
        {
            name: 'Hilmi Mughid',
            avatar: 'https://media.licdn.com/dms/image/D5603AQHvWoKRFuoMDA/profile-displayphoto-shrink_800_800/0/1701437008912?e=1716422400&v=beta&t=GoxxS_00WEq4-_rHBwj2p5wRFK-3OE5JtLiNo8yJZ1Y'
        },
        {
            name: 'Hilmi',
            avatar: 'https://media.licdn.com/dms/image/D5603AQHvWoKRFuoMDA/profile-displayphoto-shrink_800_800/0/1701437008912?e=1716422400&v=beta&t=GoxxS_00WEq4-_rHBwj2p5wRFK-3OE5JtLiNo8yJZ1Y'
        },
        {
            name: 'Mughid',
            avatar: 'https://media.licdn.com/dms/image/D5603AQHvWoKRFuoMDA/profile-displayphoto-shrink_800_800/0/1701437008912?e=1716422400&v=beta&t=GoxxS_00WEq4-_rHBwj2p5wRFK-3OE5JtLiNo8yJZ1Y'
        },
    ]
};

let fetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
};

let post = document.getElementById('postContent');
fetch(endpoint, fetchOptions)
    .then((res) => res.json())
    .then((response) => {
        console.log("Console log metode POST:", response)
        response.data.forEach(element => {
            post.innerHTML += `
            <div class="card-container">
                <img class="card-images" src="${element.avatar}">
                <h3 class="card-texts">${element.name}</h3>
            </div>
            `
        });
    })
    .catch(error => console.error(error))

// Metode PUT untuk edit data id: 2
let endpointPut = 'https://reqres.in/api/users/2'
let dataPut = {
    name: "Patrick P. Gelsinger",
    avatar: "https://images.anandtech.com/doci/16419/Pat_Twitter_678x452.jpg"
};

let fetchOptionsPut = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dataPut)
};

fetch(endpointPut, fetchOptionsPut)
    .then((res) => res.json())
    .then((response) => {
        console.log("Console log metode PUT:", response)
        let container = document.getElementById('putContent');

        let card = document.createElement('div');
        card.className = 'card-container';

        let img = document.createElement('img');
        img.className = 'card-images';
        img.src = response.avatar;

        let h3 = document.createElement('h3');
        h3.className = 'card-texts';
        h3.textContent = response.name;

        card.appendChild(img);
        card.appendChild(h3);
        container.appendChild(card);
    })
    .catch(error => console.error(error));
