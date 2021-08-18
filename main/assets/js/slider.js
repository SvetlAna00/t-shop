// FOR SALE SLIDER

const saleSlides = document.querySelectorAll('.sale_slider_item');
const saleSlidesNum = saleSlides.length;

let activeSaleSliderNumber = document.querySelector('.Banner_sale_number_active');
let allSaleSliderNumber = document.querySelector('.Banner_sale_number_all');

let activeSaleSlide = document.querySelector('.slider_item_sale_active');

let positionActiveSaleSlide = Array.prototype.slice.call(saleSlides).indexOf(document.querySelector('.slider_item_sale_active')) + 1;

activeSaleSliderNumber.innerHTML = "0";
activeSaleSliderNumber.innerHTML += `${positionActiveSaleSlide}`;

allSaleSliderNumber.innerHTML = "0";
allSaleSliderNumber.innerHTML += `${saleSlidesNum}`;

let nextSaleArrow = document.querySelector('.slider_next_sale_arrow');
let prevSaleArrow = document.querySelector('.slider_prev_sale_arrow');
// ____________________________________________________________________________________________________________________________

// FOR NEWS SLIDER

const newsSlides = document.querySelectorAll('.news_slider_item'); // добавить в новинки ту же структуру
const newsSlidesNum = newsSlides.length;

let activeNewsSliderNumber = document.querySelector('.Banner_news_number_active');
let allNewsSliderNumber = document.querySelector('.Banner_news_number_all');

let activeNewsSlide = document.querySelector('.slider_item_news_active');

let positionActiveNewsSlide = Array.prototype.slice.call(newsSlides).indexOf(document.querySelector('.slider_item_news_active')) + 1;

activeNewsSliderNumber.innerHTML = "0";
activeNewsSliderNumber.innerHTML += `${positionActiveNewsSlide}`;

allNewsSliderNumber.innerHTML = "0";
allNewsSliderNumber.innerHTML += `${newsSlidesNum}`;

let nextNewsArrow = document.querySelector('.slider_next_news_arrow');
let prevNewsArrow = document.querySelector('.slider_prev_news_arrow');
// ______________________________________________________________________________________________________________________________


// START SLIDER____________________________________________________

i = 0; // индекс слайда в массиве

if (i === 0) {
    prevSaleArrow.style.display = 'none';
    prevNewsArrow.style.display = 'none';
}
else if (i > 0) {
    prevSaleArrow.style.display = '';
    prevNewsArrow.style.display = '';
}

// SALE ___________________________________________________________
let updateSaleSlidePosition = () => {
    for (let slide of saleSlides) {
        slide.classList.remove('slider_item_sale_active');
    }
    saleSlides[i].classList.add('slider_item_sale_active');

    positionActiveSaleSlide = Array.prototype.slice.call(saleSlides).indexOf(document.querySelector('.slider_item_sale_active')) + 1;
    activeSaleSliderNumber.innerHTML = "0";
    activeSaleSliderNumber.innerHTML += `${positionActiveSaleSlide}`;

    if (i === 0) {
        nextSaleArrow.style.display = '';
        prevSaleArrow.style.display = 'none';
    }
    else if (i > 0) {
        prevSaleArrow.style.display = '';
    }
    if (i === saleSlidesNum - 1) {
        nextSaleArrow.style.display = 'none';
        prevSaleArrow.style.display = '';
    }
    if (i < saleSlidesNum - 1) {
        nextSaleArrow.style.display = '';
    }
}

// newxtSale
let showNextSaleSlide = () => {
    i++;
    if (i < saleSlidesNum){
        updateSaleSlidePosition();
    }
}
// prevSale
let showPrevSaleSlide = () => {
    i--;
    updateSaleSlidePosition();
}

setInterval(showNextSaleSlide(), 5000);

nextSaleArrow.addEventListener("click", showNextSaleSlide);
prevSaleArrow.addEventListener("click", showPrevSaleSlide);


// NEWS __________________________________________________________
let updateNewsSlidePosition = () => {
    for (let slide of newsSlides) {
        slide.classList.remove('slider_item_news_active');
    }
    newsSlides[i].classList.add('slider_item_news_active');

    positionActiveNewsSlide = Array.prototype.slice.call(newsSlides).indexOf(document.querySelector('.slider_item_news_active')) + 1;
    activeNewsSliderNumber.innerHTML = "0";
    activeNewsSliderNumber.innerHTML += `${positionActiveNewsSlide}`;

    if (i === 0) {
        nextNewsArrow.style.display = '';
        prevNewsArrow.style.display = 'none';
    }
    else if (i > 0) {
        prevNewsArrow.style.display = '';
    }
    if (i === newsSlidesNum - 1) {
        nextNewsArrow.style.display = 'none';
        prevNewsArrow.style.display = '';
    }
    if (i < newsSlidesNum - 1) {
        nextNewsArrow.style.display = '';
    }
}
//nextNews
let showNextNewsSlide = () => {
    i++;
    updateNewsSlidePosition();
}
//prevNews
let showPrevNewsSlide = () => {
    i--;
    updateNewsSlidePosition();
}

nextNewsArrow.addEventListener("click", showNextNewsSlide);
prevNewsArrow.addEventListener("click", showPrevNewsSlide);
