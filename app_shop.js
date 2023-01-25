`use strict`;


//add_to_cart

let productsCountElement = document.getElementById (`qqq`);
let addToCartBtns = document.querySelectorAll (`.add_btn`);

/*for (let i=0; i<addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function(){
    console.log("clicked");
    })
};*/

let n=0;
function onClick() {
    n=n+1;
    productsCountElement.textContent = n;
};


//change_img

let heartImg = document.querySelectorAll (`.heart_img`);
console.log (heartImg);

heartImg.forEach (function(elem) {
    elem.addEventListener (`click`, function(e) {
            /*if (elem.classList.contains(`clicked`)) {
            elem.classList.remove(`clicked`);
            } else {elem.classList.add(`clicked`);
        }
        }
    )*/
    console.log (e);
    e.target.classList.toggle(`clicked`);
})
});

//modal_block

let moreDetailsBtn = document.querySelectorAll (`.details`);
let modal = document.querySelector (`.modal`);
let closeBtn = document.querySelector (`.close_btn`);

moreDetailsBtn.forEach ((item) => item.addEventListener(`click`, openModal));
closeBtn.addEventListener(`click`, closeModal);

function openModal() {
    modal.classList.add(`show`);
};

function closeModal() {
    modal.classList.remove(`show`);
};

modal.addEventListener(`click`, function(e) {
    if (e.target === modal) {
        closeModal();
    };
});

//slider

$(`.slider`).slick({
    //autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
});

//scroll_wonder

/*let scrollPosition = window.scrollY;
let scrollMax = document.body.scrollHeight;

console.log (scrollPosition);
console.log (scrollMax);

window.addEventListener(`scroll`, function scrollModal() {
    if (window.scrollY === 1500) {openModal};
    window.removeEventListener(`scroll`, scrollModal);
});*/

/*setInterval(openModal, 3000);*/

function showModalByScroll() { 
    if (window.scrollY >= document.documentElement.scrollHeight/2) { 
      openModal(); 
      window.removeEventListener("scroll", showModalByScroll); 
    } 
  } 
   
window.addEventListener("scroll", showModalByScroll);

AOS.init();

//construct_function

/*class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    hi = function() {
        console.log(`Hi ` + this.model);
    };

    hello = function() {
        console.log(`Hello ` + this.model + ` ` + this.color);
    };
};

let audi = new Car(`A4`, `black`, 2020);
let bmw = new Car(`328`, `grey`, 2010);
let lexus = new Car(`es250`, `white`, 2012);

console.log(audi);
console.log(bmw);
console.log(lexus);

audi.hi();
bmw.hi();
lexus.hi();

lexus.hello();*/

//products counter

const decrementBtns = document.querySelectorAll(`.decrement_btn`);
const incrementBtns = document.querySelectorAll(`.increment_btn`);
const productsCount = document.querySelectorAll(`.product_quantity input`);

function Counter(decrementBtn, incrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };

    this.toggleButtonState = function() {
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count<=1;
        this.domRefs.incrementBtn.disabled = count>=10;
    };

    this.toggleButtonState();

    this.increment = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value+1;
        this.toggleButtonState();
    };

    this.decrement = function() {
        this.domRefs.inputField.value = +this.domRefs.inputField.value-1;
        this.toggleButtonState();
    };

    this.domRefs.incrementBtn.addEventListener(`click`, this.increment.bind(this));

    this.domRefs.decrementBtn.addEventListener(`click`, this.decrement.bind(this));
  
};

//let counter1 = new Counter(decrementBtns, incrementBtns, productsCount);
let counters = [];

productsCount.forEach (
    (element, i) => (counters[i] = new Counter (decrementBtns[i], incrementBtns[i], element))
);

//weather_widget

let city = prompt(`Your city?`);

let userCity = document.querySelector(`.city`);
userCity.innerHTML = `City: ` + city;

fetch(`http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19 `)
    .then((qqq) => qqq.json())
    .then((data) => {

        console.log(data);

        let tempValue = data.main.temp;
        let userTemp = document.querySelector(`.temp`);
        userTemp.innerHTML = `Temperature: ` + tempValue + ' deg';

        let pressureValue = data.main.pressure;
        let userPressure = document.querySelector(`.pressure`);
        userPressure.innerHTML = `Pressure: ` + pressureValue + ` mmh`;

        let descriptionValue = data.weather[0].description;
        let userDescription = document.querySelector(`.description`);
        userDescription.innerHTML = `Sky: ` + descriptionValue;

        let humidiyValue = data.main.humidity;
        let userHumidity = document.querySelector(`.humidity`);
        userHumidity.innerHTML = `Humidity: ` + humidiyValue + `%`;

        let speedValue = data.wind.speed;
        let userSpeed = document.querySelector(`.speed`);
        userSpeed.innerHTML = `Wind speed: ` + speedValue + ` m/s`;

        let degValue = data.wind.deg;
        let userDeg = document.querySelector(`.deg`);
        userDeg.innerHTML = `Wind direction: ` + degValue + ' deg';

        //let iconValue = data.weather[0].icon;
        //let iconUrl = 
        //let userIcon = document.querySelector(`.icon`);
        //userIcon.innerHTML = degValue;
    });


