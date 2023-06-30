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
