let circle = document.querySelector('.btn_circle');
promoCounterClicks = 0;
pickupCounterClicks = 0;
deliveryCounterClicks = 0;


let allBtnCircle = document.querySelectorAll('.btn_circle');
let activeBtnCircle = document.querySelectorAll('.btn_circle_active');

let promoBtn = document.querySelector('#promo_btn');
let pickupBtn = document.querySelector('#pickup_btn');
let deliveryBtn = document.querySelector('#delivery_btn');

let input = document.querySelector('.promo_input');

// .....................................................................
let productCoin = document.querySelector('.product_coin');

let btnPlaceAnOrder = document.querySelector('.place_an_order_btn');
const promocodes = ['Лето2021', 'T-shop2021', 'SoonAutumn'];

let deliveryCoin = document.querySelector('.delivery_total_coin');
let promocodeCoin = document.querySelector('.promo_total_coin');
let saleCoin = document.querySelector('.sale_total_coin');
saleCoin.innerHTML = "0 руб"

let totalCoinValue = document.querySelector('.place_an_order_total_coin');
totalCoinValue.innerHTML = "0"

let placeAnOrder = () => {
    getPromo();
    totalCoinValue.innerHTML = (parseInt(productCoin.innerHTML) + parseInt(deliveryCoin.innerHTML)) - parseInt(promocodeCoin.innerHTML) - parseInt(saleCoin.innerHTML);
    console.log(parseInt(saleCoin.innerHTML))
}
btnPlaceAnOrder.addEventListener("click", placeAnOrder)

let promoActive = (current) => {
    promoCounterClicks++;
    if (promoCounterClicks % 2 != 0) {
        makeActive(current);
        getPromo();
    }
    else {
        disActive(current);
        input.removeAttribute('readonly');
    }
}
// ......................................................................

let getPromo = () => {
    promoText = document.querySelector('.promo_input').value;
    input.readOnly = "true";
    if (promocodes.indexOf(promoText) === -1) {
        document.querySelector('.promo_input').style.border = "2px solid #ff0000"
    }
    else if (promocodes.indexOf(promoText) != -1) {
        document.querySelector('.promo_input').style.border = "2px solid #f0b643"
    }
    if (promocodes.indexOf(promoText) != -1) {
        if (promoText === 'Лето2021') {
            promocodeCoin.innerHTML = "100 руб"
        }
        else if (promoText === 'T-shop2021') {
            promocodeCoin.innerHTML = "200 руб"
        }
        else if (promoText === 'SoonAutumn') {
            promocodeCoin.innerHTML = "500 руб"
        }
    }
    else {
        promocodeCoin.innerHTML = "0 руб"
    }
}

let pickupActive = (current) => {
    pickupCounterClicks++;
    if (pickupCounterClicks % 2 != 0 && !deliveryBtn.classList.contains('btn_circle_active')) {
        makeActive(current);
        document.querySelector('.pickup_select').style.display = "block";

        deliveryCoin.innerHTML = "0 руб";
    }
    else {
        disActive(current);
        document.querySelector('.pickup_select').style.display = "";
    }
}

let deliveryActive = (current) => {
    deliveryCounterClicks++;
    if (deliveryCounterClicks % 2 != 0 && !pickupBtn.classList.contains('btn_circle_active')) {
        makeActive(current);
        document.querySelector('.select-delivery_section').style.display = "flex";

        deliveryCoin.innerHTML = "300 руб";
    }
    else {
        disActive(current);
        document.querySelector('.select-delivery_section').style.display = "";
    }
}

let makeActive = (current) => {
    current.target.classList.add('btn_circle_active');
    current.target.classList.remove('btn_circle');
}
let disActive = (current) => {
    current.target.classList.add('btn_circle');
    current.target.classList.remove('btn_circle_active');

    document.querySelector('.promo_input').style.border = "";

    promocodeCoin.innerHTML = "";
    deliveryCoin.innerHTML = "";
}

// circle.addEventListener("click", changeBtn);
promoBtn.addEventListener("click", promoActive);
pickupBtn.addEventListener("click", pickupActive);
deliveryBtn.addEventListener("click", deliveryActive);