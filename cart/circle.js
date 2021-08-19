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

let getPromo = () => {
    promoText = document.querySelector('.promo_input').value;
    console.log(promoText);
    input.readOnly = "true";
}

let pickupActive = (current) => {
    pickupCounterClicks++;
    if (pickupCounterClicks % 2 != 0 && !deliveryBtn.classList.contains('btn_circle_active')) {
        makeActive(current);
        document.querySelector('.pickup_select').style.display = "block";
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
}

// circle.addEventListener("click", changeBtn);
promoBtn.addEventListener("click", promoActive);
pickupBtn.addEventListener("click", pickupActive);
deliveryBtn.addEventListener("click", deliveryActive);