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

// prevSale
let showPrevSaleSlide = () => {
    i--;
    updateSaleSlidePosition();
}
// newxtSale
let showNextSaleSlide = () => {
    i++;
    if (i < saleSlidesNum) {
        updateSaleSlidePosition();
    }
    else {
        showPrevSaleSlide()
    }
}

setInterval(() => {
    if (nextSaleArrow.style.display == '') {
        i++;
        updateSaleSlidePosition();
    }
    else {
        i--;
        updateSaleSlidePosition();
        if (nextSaleArrow.style.display == '') {
            i--;
            updateSaleSlidePosition();
        }
    }
}, 3000);

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

window.addEventListener("scroll", () => {
    const posNews = document.querySelector('.news_slider_item').getBoundingClientRect();
    if (posNews.top) {

        setInterval(() => {
            if (nextNewsArrow.style.display === '') {
                console.log("News works")
                updateNewsSlidePosition();
            }
            else {
                console.log(i)
                i--;
                updateNewsSlidePosition();
            }
        }, 3000)
    }
}
)
nextNewsArrow.addEventListener("click", showNextNewsSlide);
prevNewsArrow.addEventListener("click", showPrevNewsSlide);
// _______________________________________________________________
// _______________________________________________________________
// BRENDS SLIDER

let brendList = document.querySelector('.brends_content');

let prevBrendArrow = document.querySelector('.brends_prev_arrow');
let nextBrendArrow = document.querySelector('.brends_next_arrow');

let jump = 1;
let pos = 0;

window.setInterval(() => {
    pos += jump;
    if (pos > 300 || pos < -150) {
        jump *= (-1);
    }
    brendList.style.right = pos + 'px';
}, 100);

let showPrevBrend = () => {
    window.setInterval(() => {
        pos += jump;
        if (pos > 300 || pos < -150) {
            jump *= (-1);
        }
        console.log(pos)
        brendList.style.right = pos + 'px';
    }, 1000);
}

let showNextBrend = () => {
    window.setInterval(() => {
        pos += jump;
        if (pos > 300 || pos < -150) {
            jump *= (-1);
        }
        console.log(pos)
        brendList.style.right = pos + 'px';
    }, 10);
}

prevBrendArrow.addEventListener("click", showPrevBrend);
nextBrendArrow.addEventListener("click", showNextBrend);