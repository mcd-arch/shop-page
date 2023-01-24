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

const decrementBtns = document.querySelectorAll(`.decrement_btn`)[0];
const incrementBtns = document.querySelectorAll(`.increment_btn`)[0];
const productsCount = document.querySelectorAll(`.product_quantity input`)[0];

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

let counter1 = new Counter(decrementBtns, incrementBtns, productsCount);
console.log(counter1);