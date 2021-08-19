let favoritesValue = document.querySelector('#count_favorite');
let text = document.querySelector('#text_favorite');

let numOfFavorites = 0;

const arr = ["Товар", "Товара", "Товаров"];
const declOfNum = (n, titles) => {
    return n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?
        0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}
if (numOfFavorites === 0) {
    favoritesValue.innerHTML = parseInt(declOfNum(numOfFavorites, arr));
    text.innerHTML = declOfNum(numOfFavorites, arr).substr(2);
}
favoritesValue.innerHTML = parseInt(declOfNum(numOfFavorites, arr));
text.innerHTML = declOfNum(numOfFavorites, arr).substr(2);

let btnFavorite = document.querySelector('#btn_favorite');

let removeFromFavorite = () => {
    numOfFavorites -= 2;
    console.log(numOfFavorites)

    declOfNum(numOfFavorites, arr);
    favoritesValue.innerHTML = parseInt(declOfNum(numOfFavorites, arr));
    text.innerHTML = declOfNum(numOfFavorites, arr).substr(2);
}

let addToFavorite = () => {
    numOfFavorites++;
    if (numOfFavorites <= 1) {
        declOfNum(numOfFavorites, arr);
        favoritesValue.innerHTML = parseInt(declOfNum(numOfFavorites, arr));
        text.innerHTML = declOfNum(numOfFavorites, arr).substr(2);
    }
    else {
        removeFromFavorite(numOfFavorites);
    }
}

btnFavorite.addEventListener("click", addToFavorite);