let AllColors = document.querySelectorAll('.card_select_color');
let colorItem = document.querySelector('.card_select_color');
let cardColor = colorItem.querySelector('.card_color'); // для изменения цвета border при кликах на colorItem

let color = colorItem.querySelector('.color').style.background;
let colorName = colorItem.querySelector('.card_color_name').innerHTML;

let pinkColor = '#fdded8';
let pinkName = 'Pink';

let changeColor = (colorSelect, colorNameSelect) => {
    color = colorItem.querySelector('.color').style.background = colorSelect;
    colorName = colorItem.querySelector('.card_color_name').innerHTML = colorNameSelect;
    // console.log(color)
}

changeColor(pinkColor, pinkName);


let choosedColorsName = []; // MASSIVE
let counterClicksColor = 0;

let addColor = () => {
    counterClicksColor++;

    if (counterClicksColor % 2 != 0) {
        let choosedColor = colorItem;
        let choosedColorName = colorName;

        cardColor = choosedColor.querySelector('.card_color');

        choosedColorsName.push(choosedColorName);  // в MASSIVE сохраняем значение цвета, чтобы потом это сохранить в cookie
        //    данные этой функции использовать при добавлении в корзину или в Понравившиеся
        //    (в Понравившихся будет считаться длина массива)

        cardColor.style.border = "1px solid #f0b643";
    }
    else {
        choosedColorsName = [];          // в MASSIVE обнуляем значения цветов
        cardColor.style.border = "";

    }
};
// console.log(choosedColorsName); // - [], т к choosedColorsName не объявлено вне функции и
//      addEventListener('click'... выполняется после объявления массива (+ он здесь пустой)

colorItem.addEventListener('click', addColor);