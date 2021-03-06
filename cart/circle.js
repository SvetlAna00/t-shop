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
totalCoinValue.innerHTML = (parseInt(productCoin.innerHTML) * parseInt(number.innerHTML));

let updateTotalCoin = () => {
    getPromo();
    if (isNaN(parseInt(deliveryCoin.innerHTML))) {
        pickupBtn.style.background = "#ff0000";
        deliveryBtn.style.background = "#ff0000";
    }
    else {
        totalCoinValue.innerHTML = ((number.innerHTML * parseInt(productCoin.innerHTML)) + parseInt(deliveryCoin.innerHTML)) - parseInt(promocodeCoin.innerHTML) - parseInt(saleCoin.innerHTML);
    }
}

let placeAnOrder = () => {
    getPromo();
    if (isNaN(parseInt(deliveryCoin.innerHTML))) {
        pickupBtn.style.background = "#ff0000";
        deliveryBtn.style.background = "#ff0000";
        totalCoinValue.innerHTML = "Error";
    }
    else {
        updateTotalCoin();
        document.location.href = "https://svetlana00.github.io/t-shop/thanks/";
    }
}
btnPlaceAnOrder.addEventListener("click", placeAnOrder)

let promoActive = (current) => {
    promoCounterClicks++;
    if (promoCounterClicks % 2 != 0) {
        makeActive(current);
        getPromo();

        updateTotalCoin();
    }
    else {
        disActive(current);
        promocodeCoin.innerHTML = "";
        input.removeAttribute('readonly');
        updateTotalCoin();
    }
}
// ......................................................................

let getPromo = () => {
    promoText = document.querySelector('.promo_input').value;
    if (promoCounterClicks % 2 != 0) {
        input.readOnly = "true";
    }
    if (promocodes.indexOf(promoText) === -1 && promoCounterClicks % 2 != 0) {
        document.querySelector('.promo_input').style.border = "2px solid #ff0000"
    }
    else if (promocodes.indexOf(promoText) != -1 && promoCounterClicks % 2 != 0) {
        document.querySelector('.promo_input').style.border = "2px solid #f0b643"
    }
    if (promocodes.indexOf(promoText) != -1 && promoCounterClicks % 2 != 0) {
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
    if (promoText == "") {
        promocodeCoin.innerHTML = "0 руб";
        document.querySelector('.promo_input').style.border = ""
    }
}

let pickupActive = (current) => {
    pickupCounterClicks++;
    pickupBtn.style.background = "";
    deliveryBtn.style.background = "";
    if (pickupCounterClicks % 2 != 0 && !deliveryBtn.classList.contains('btn_circle_active')) {
        makeActive(current);
        document.querySelector('.pickup_select').style.display = "block";

        deliveryCoin.innerHTML = "0 руб";
        updateTotalCoin();
    }
    else {
        disActive(current);
        document.querySelector('.pickup_select').style.display = "";
    }
}

let deliveryActive = (current) => {
    pickupBtn.style.background = "";
    deliveryBtn.style.background = "";
    deliveryCounterClicks++;
    if (deliveryCounterClicks % 2 != 0 && !pickupBtn.classList.contains('btn_circle_active')) {
        makeActive(current);
        document.querySelector('.select-delivery_section').style.display = "flex";

        deliveryCoin.innerHTML = "300 руб";
        updateTotalCoin();
    }
    else {
        disActive(current);
        deliveryCoin.innerHTML = "";
        document.querySelector('.select-delivery_section').style.display = "";
    }
}

let makeActive = (current) => {
    pickupBtn.style.background = "";
    deliveryBtn.style.background = "";

    current.target.classList.add('btn_circle_active');
    current.target.classList.remove('btn_circle');
}
let disActive = (current) => {
    pickupBtn.style.background = "";
    deliveryBtn.style.background = "";

    current.target.classList.add('btn_circle');
    current.target.classList.remove('btn_circle_active');

    document.querySelector('.promo_input').style.border = "";

    // promocodeCoin.innerHTML = ""
    // deliveryCoin.innerHTML = "";
}

promoBtn.addEventListener("click", promoActive);
pickupBtn.addEventListener("click", pickupActive);
deliveryBtn.addEventListener("click", deliveryActive);