/*------------Exercicio 5----------------*/

let listaAssuntos = ["Comercial", "Dúvidas", "Revenda"];

const selectElement = document.querySelector("#assunto");

const optionsElementDisabled = document.createElement("option");
// optionsElementDisabled.setAttribute("disabled", "disabled");
optionsElementDisabled.setAttribute("selected", "selected");
// optionsElementDisabled.setAttribute("hiden", "hidden");
optionsElementDisabled.setAttribute("value", "");
optionsElementDisabled.innerText = "Selecione";

selectElement.appendChild(optionsElementDisabled);

listaAssuntos.forEach((assunto) => {
    const optionsElement = document.createElement("option");
    optionsElement.setAttribute("value", assunto.toLowerCase());
    optionsElement.innerText = assunto;

    selectElement.appendChild(optionsElement);
});

const formulario = document.querySelector("#form-contato");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = document.querySelector("#nome").value;
    let telefone = document.querySelector("#telefone").value;
    let email = document.querySelector("#email").value;
    let assunto = document.querySelector("#assunto").value;
    let mensagem = document.querySelector("#mensagem").value;
    let orcamento = document.querySelector("#orcamento").checked
        ? "Sim"
        : "Não";

    let body = `Nome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nAssunto: ${assunto}\nOrçamento: ${orcamento} \nMensagem: ${mensagem}`;

    Email.send({
        SecureToken: "7d4abb57-fc7a-482f-af11-505ba9b708e0",
        // Host: "smtp.elasticemail.com",
        // Username: "antonio13050@gmail.com",
        // Password: "98C8CFD66FBE288CDE79D83F60C3A3508F51",
        To: "antonio13050@gmail.com",
        From: "antonio13050@gmail.com",
        Subject: "E-mail do formulario do site FarmaDev",
        Body: body,
    }).then(() => alert("E-mail enviado com sucesso"));

    formulario.reset();
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
