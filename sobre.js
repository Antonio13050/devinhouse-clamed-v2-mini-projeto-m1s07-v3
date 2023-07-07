/*--------------------------DarkMode-----------------------------------*/
let theme = localStorage.getItem("theme") || "";

let iconBtnMode = document.querySelector("#icon-btn-mode");
let btnModeDark = document.querySelector("#mode-dark");
let btnModeLight = document.querySelector("#mode-light");
let html = document.querySelector("html");
let nav = document.querySelector("nav");

function verificarthemeMode() {
    if (theme === "dark") {
        setDarkMode();
    } else {
        setLightMode();
    }
}
verificarthemeMode();
//let btnCarrinho = document.querySelector(".btn-carrinho");
//let btnFavoritosHeader = document.querySelector(".btn-favoritos-header");
//let redCart = document.querySelector(".red-cart");

function setDarkMode() {
    iconBtnMode.classList.remove("fa-sun");
    iconBtnMode.classList.add("fa-moon");
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-light");
    //btnCarrinho.style.color = "#212529";
    //btnFavoritosHeader.style.color = "#212529";
    //redCart.style.background = "#212529";
    html.setAttribute("data-bs-theme", "dark");
    theme = "dark";
    localStorage.setItem("theme", theme);
}

btnModeDark.addEventListener("click", setDarkMode);

function setLightMode() {
    iconBtnMode.classList.remove("fa-moon");
    iconBtnMode.classList.add("fa-sun");
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
    html.setAttribute("data-bs-theme", "light");
    //btnCarrinho.style.color = "white";
    //btnFavoritosHeader.style.color = "white";
    //redCart.style.background = "white";
    theme = "light";
    localStorage.setItem("theme", theme);
}
btnModeLight.addEventListener("click", setLightMode);
/*-------------------------------------------------------------*/
