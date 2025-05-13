const url = "../data/restaurant.json";
const cards = document.querySelector('#cards')

const all = document.querySelector('#all');
const yuanbai = document.querySelector('#yuanbai');
const jucheng = document.querySelector('#jucheng');

async function getRestaurantData() {
    const response = await fetch(url);
    const data = await response.json();
    let restaurants = data.restaurants;

    console.table(restaurants);
    displayRestaurant(restaurants)
}

const displayRestaurant = (restaurants) => {
    cards.innerHTML = "";
    restaurants.forEach((restaurant) => {
        const card = document.createElement('section');

        // 餐廳名稱
        const name = document.createElement('h2');
        name.textContent = restaurant.name;

        // 劃位qrcode
        const qrcode = document.createElement('img');
        qrcode.src = restaurant.qrcode;
        qrcode.setAttribute('width', "200");

        // 劃位連結
        const link = document.createElement('a');
        link.textContent = "點我劃位";
        link.href = restaurant.url;
        
        // 百貨名稱
        const mallName = document.createElement('p');
        mallName.textContent = restaurant.baihuo;

        card.appendChild(name);
        card.appendChild(qrcode);
        card.appendChild(link);
        card.appendChild(mallName);
        cards.appendChild(card);
    })
}

getRestaurantData();