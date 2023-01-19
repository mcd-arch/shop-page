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

//scroll

let scrollPosition = window.scrollY;
let scrollMax = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

console.log (scrollPosition);
console.log (scrollMax);

console.log(+scrollPosition > (+scrollMax*0.5));

document.addEventListener(`scroll`, function() {
    if (scrollPosition > (scrollMax*0.5)) {openModal()} else {closeModal()};
});