let colorName = document.querySelector('.product_color');

let pinkColor = '#fdded8';
let pinkName = 'Pink';

let changeColor = (colorSelect, colorNameSelect) => {
    colorName.style.background = colorSelect.toString();
    document.querySelector('.product_color').innerHTML = colorNameSelect;
}

changeColor(pinkColor, pinkName);

// UNDO PRODUCT
let removeProduct = document.querySelector('.remove_product');

let undoProduct = () => {
    product.style.display = "none";
}

removeProduct.addEventListener("click", undoProduct);

// NUMBER OF PRODUCT

let product = document.querySelector('.propduct_item')
let number = document.querySelector('.number_product');

counter = 1;
number.innerHTML = counter;

let reduceNumber = document.querySelector('.reduce_number_product');
let addNumber = document.querySelector('.add_number_product');

let updateNum = () => {
    number.innerHTML = counter;

    totalCoinValue.innerHTML = (parseInt(productCoin.innerHTML) * parseInt(number.innerHTML));
}

let lessNum = () => {
    counter--;
    updateNum();

    if (counter <= 0) {
        undoProduct();
    }
}

let moreNum = () => {
    counter++;
    product.style.display = "";
    updateNum();
}

reduceNumber.addEventListener("click", lessNum);
addNumber.addEventListener("click", moreNum);
