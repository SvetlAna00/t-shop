let chooseSize = document.querySelector('.card_size');
let counterClicks = 0;

let addSize = () => {
    counterClicks++;

    if (counterClicks % 2 != 0) {
        let choosedSize = chooseSize;
        let choosedSizeValue = choosedSize.innerHTML;
        
        choosedSizesValue.push(choosedSizeValue);  // в MASSIVE сохраняем значение размера, чтобы потом это сохранить в cookie
                                                //    данные этой функции использовать при добавлении в корзину или в Понравившиеся
                                                //    (в Понравившихся будет считаться длина массива)

        // console.log(choosedSizesValue); // проверка

        choosedSize.style.border = "1px solid #f0b643";
    }
    else {
        choosedSizesValue = [];          // в MASSIVE обнуляем значения размеров
        // console.log(choosedSizesValue); // проверка
        chooseSize.style.border = "";
        chooseSize.style.background = "";
        chooseSize.style.color = "";

    }
    // console.log(choosedSizesValue);
};
// console.log(choosedSizesValue); // - [], т к choosedSizesValue не объявлено вне функции и
                                    //      addEventListener('click'... выполняется после объявления массива (+ он здесь пустой)

chooseSize.addEventListener('click', addSize);

let choosedSizesValue = []; // MASSIVE