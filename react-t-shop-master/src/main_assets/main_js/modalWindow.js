let profileIcon = document.getElementById("profile_icon");
let modalWindow = document.getElementById("modal_window");

let favouriteIcon = document.getElementById("favourite_icon");
let modalWindowFavourite = document.getElementById("modal_window_favourite");

let openModalWindowProfile = () => {
    modalWindow.style.display = "block";
};
let closeModalWindowProfile = () => {
    modalWindow.style.display = "none";
};

let openModalWindowFavourite = () => {
    modalWindowFavourite.style.display = "block";
};
let closeModalWindowFavourite = () => {
    modalWindowFavourite.style.display = "none";
};

profileIcon.addEventListener("click", openModalWindowProfile);
modalWindow.addEventListener("mouseleave", closeModalWindowProfile);

favouriteIcon.addEventListener("click", openModalWindowFavourite);
modalWindowFavourite.addEventListener("mouseleave", closeModalWindowFavourite);
