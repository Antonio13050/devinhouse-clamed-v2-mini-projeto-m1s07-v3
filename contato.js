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
