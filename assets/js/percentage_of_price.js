let oldCoin = parseInt(document.querySelector('.item_recommend_old_coin').innerHTML);
let newCoin = parseInt(document.querySelector('.item_recommend_new_coin').innerHTML);

let contentCoin = document.querySelector('.percentage_of_price');

contentCoin.innerHTML = "";

let percentageOfPrice = Math.ceil(100 - (( newCoin * 100 ) / oldCoin)).toString();

contentCoin.innerHTML += `- ${percentageOfPrice} %`;