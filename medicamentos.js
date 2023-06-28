/*---------------Exercicio 2---------------*/
/*---------------Todos os medicamentos - Página medicamentos.html---------------*/

let infoCardTodosOsMedicamentos = [
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

infoCardTodosOsMedicamentos.forEach((card) => {
    let boxContainerTodosOsMedicamentos = document.querySelector(
        ".todos-medicamentos"
    );

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

    boxContainerTodosOsMedicamentos.appendChild(divBox);
});
