/*---------------Exercicio 2---------------*/
/*---------------Mais vendidos - Página index.html---------------*/
let infoCardMaisVendido = [
    {
        img: "img/doralgina.webp",
        alt: "DORALGINA COM 4 DRÁGEAS",
        titulo: "Doralgina com 4 drágeas",
        precoAnterior: "DE R$ 2,00",
        precoAtual: "R$ 1,56",
    },
    {
        img: "img/stilgrip.webp",
        alt: "STILGRIP GRANULADO 1 ENVELOPE 5G",
        titulo: "Stilgrip Granulado 1 envelope 5g",
        precoAnterior: "DE R$ 3,00",
        precoAtual: "R$ 1,52",
    },
    {
        img: "img/loratadina-cimed.webp",
        alt: "LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO",
        titulo: "Loratadina Cimed com 12 comprimidos 10mg generico",
        precoAnterior: "DE R$ 8,99",
        precoAtual: "R$ 6,77",
    },
    {
        img: "img/nimesulida-cimed.webp",
        alt: "NIMESULIDA CIMED COM 12 COMPRIMIDOS 100MG GENERICO",
        titulo: "Nimesulida Cimed com 12 comprimidos 100mg generico",
        precoAnterior: "DE R$ 12,00",
        precoAtual: "R$ 9,90",
    },
];
infoCardMaisVendido.forEach((card) => {
    let boxContainerMaisVendidos = document.querySelector(".mais-vendidos");

    let divBox = document.createElement("div");
    divBox.classList.add("box");

    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.classList.add("text-center");

    let divCardHeader = document.createElement("div");
    divCardHeader.classList.add("card-header");
    divCardHeader.classList.add("d-flex");
    divCardHeader.classList.add("align-items-center");
    divCardHeader.classList.add("justify-content-end");

    let iconCardHeader = document.createElement("i");
    iconCardHeader.classList.add("fa-solid");
    iconCardHeader.classList.add("fa-heart");
    iconCardHeader.classList.add("fa-xl");
    iconCardHeader.classList.add("icon-favorite");
    iconCardHeader.classList.add("py-4");

    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img");
    imgCard.setAttribute("src", card.img);
    imgCard.setAttribute("alt", card.alt);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let pCardBodyText = document.createElement("p");
    pCardBodyText.classList.add("card-text");
    pCardBodyText.innerHTML = card.titulo;

    let h5CardBodyTitle = document.createElement("h5");
    h5CardBodyTitle.classList.add("card-title");
    h5CardBodyTitle.innerHTML = card.precoAnterior;

    let h4CardBodyTitle = document.createElement("h4");
    h4CardBodyTitle.classList.add("card-title");
    h4CardBodyTitle.innerHTML = card.precoAtual;

    let btnCardBody = document.createElement("a");
    btnCardBody.classList.add("btn");
    btnCardBody.classList.add("btn-primary");
    btnCardBody.classList.add("btn-icon-btn");
    btnCardBody.classList.add("gap-2");

    let iconBtnCardBody = document.createElement("i");
    iconBtnCardBody.classList.add("fa-solid");
    iconBtnCardBody.classList.add("fa-plus");

    let spanBtnCardBody = document.createElement("span");
    spanBtnCardBody.innerHTML = "Adicionar";

    btnCardBody.appendChild(iconBtnCardBody);
    btnCardBody.appendChild(spanBtnCardBody);

    divCardBody.appendChild(pCardBodyText);
    divCardBody.appendChild(h5CardBodyTitle);
    divCardBody.appendChild(h4CardBodyTitle);
    divCardBody.appendChild(btnCardBody);

    divCardHeader.appendChild(iconCardHeader);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(imgCard);
    divCard.appendChild(divCardBody);

    divBox.appendChild(divCard);

    boxContainerMaisVendidos.appendChild(divBox);
});

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
