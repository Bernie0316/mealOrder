const url = "../data/restaurant.json";
const cards = document.querySelector('#cards')

const all = document.querySelector('#all');
const yuanBai = document.querySelector('#yuanBai');
const juCheng = document.querySelector('#juCheng');
const xiangPingFang = document.querySelector('#xiangPingFang');
const other = document.querySelector('#others');

async function getRestaurantData(filter = "all") {
    const response = await fetch(url);
    const data = await response.json();
    let restaurants = data.restaurants;

    switch (filter) {
        case "yuanBai":
            restaurants = restaurants.filter((restaurant) => restaurant.baihuo === "遠百");
            break;
        case "juCheng":
            restaurants = restaurants.filter((restaurant) => restaurant.baihuo === "巨城");
            break;
        case "xiangPingFang":
            restaurants = restaurants.filter((restaurant) => restaurant.baihuo === "享平方");
            break;
        case "other":
            restaurants = restaurants.filter((restaurant) => restaurant.baihuo === "其他");
            break;        
        default:
            break;
    }
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

all.addEventListener('click', () => {
    clearButtonClasses();
    getRestaurantData('all');
    all.classList.add('active');
})
yuanBai.addEventListener('click', () =>{
    clearButtonClasses();
    getRestaurantData('yuanBai');
    yuanBai.classList.add('active');
})
juCheng.addEventListener('click', () =>{
    clearButtonClasses();
    getRestaurantData('juCheng');
    juCheng.classList.add('active');
})
xiangPingFang.addEventListener('click', () =>{
    clearButtonClasses();
    getRestaurantData('xiangPingFang');
    xiangPingFang.classList.add('active');
})
other.addEventListener('click', () =>{
    clearButtonClasses();
    getRestaurantData('other');
    other.classList.add('active');
})

function clearButtonClasses() {
    const filterButtons = document.querySelectorAll('button');
    filterButtons.forEach(button => button.className="");
}
