const url = "/data/restaurant.json";
const cards = document.querySelector('#cards')

const all = document.querySelector('#all');
const yuanbai = document.querySelector('#yuanbai');
const jucheng = document.querySelector('#jucheng');

async function getRestaurantData() {
    const response = await fetch(url);
    const data = await response.json();
    let restaurants = data.restaurants;

    console.table(restaurants);
    displayRestaurant()
}

const displayRestaurant = (restaurants) => {
    cards.innerHTML = "";
    restaurants.forEach((restaurant) => {
        const card = document.createElement('section');

        const name = document.createElement('h2');
        name.textContent = restaurant.name;

        card.appendChild(name);
        cards.appendChild(card);
    })
}

