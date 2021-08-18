let circle = document.querySelector('.btn_circle');
counterClicksCircle = 0;
circle.style.left = "5px";

let changeBtn = () => {
    counterClicksCircle++;

    if (counterClicksCircle % 2 != 0) {
        circle.style.background = "#F0B643";
        circle.style.right = "5px";
        circle.style.left = "";
    }
    else {
        circle.style.background = "";
        circle.style.right = "";
        circle.style.left = "5px";
    }

}

circle.addEventListener("click", changeBtn);