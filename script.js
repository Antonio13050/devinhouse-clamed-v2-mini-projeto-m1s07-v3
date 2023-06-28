/*---------------Exercicio 1---------------*/
infoHeader = {
    logo: "img/logo.png",
    alt: "Logo",
    width: "200",
    paginas: [
        {
            nome: "todos os departamentos",
            href: "index.html",
        },
        {
            nome: "medicamentos",
            href: "medicamentos.html",
        },
        {
            nome: "sobre nós",
            href: "sobre.html",
        },
        {
            nome: "fale conosco",
            href: "contato.html",
        },
    ],
};

document.querySelector(".header-logo a").innerHTML = `<img
src=${infoHeader.logo}
alt=${infoHeader.alt}
width=${infoHeader.width}
/>`;

// function criaHref(classe, pagina) {
//     document.querySelector(classe).setAttribute("href", pagina);
// }

// criaHref(".link-index", infoHeader.paginas[0].href);
// criaHref(".link-medicamentos", infoHeader.paginas[1].href);
// criaHref(".link-sobre", infoHeader.paginas[2].href);
// criaHref(".link-contato", infoHeader.paginas[3].href);
infoHeader.paginas.forEach((pagina) => {
    let li = document.createElement("li");
    li.classList.add("nav-item");
    li.classList.add("nav-link-color");
    li.classList.add("fw-bold");

    let a = document.createElement("a");
    a.classList.add("nav-link");

    a.setAttribute("href", pagina.href);
    a.innerHTML = pagina.nome.toUpperCase();
    li.appendChild(a);
    document.querySelector(".list-menus ul").appendChild(li);
});

//document.querySelector(".list-menus ul").innerHTML =

// document
//     .querySelector(".link-index")
//     .setAttribute("href", infoHeader.paginas.index);

// document
//     .querySelector(".link-medicamentos")
//     .setAttribute("href", infoHeader.paginas.medicamentos);

// document
//     .querySelector(".link-sobre")
//     .setAttribute("href", infoHeader.paginas.sobre);

// document
//     .querySelector(".link-contato")
//     .setAttribute("href", infoHeader.paginas.contato);

/*---------------Exercicio 2---------------*/
/*---------------Mais vendidos - Página index.html---------------*/
// let infoCardMaisVendido = [
//     {
//         img: "img/doralgina.webp",
//         alt: "DORALGINA COM 4 DRÁGEAS",
//         titulo: "Doralgina com 4 drágeas",
//         precoAnterior: "DE R$ 2,00",
//         precoAtual: "R$ 1,56",
//     },
//     {
//         img: "img/stilgrip.webp",
//         alt: "STILGRIP GRANULADO 1 ENVELOPE 5G",
//         titulo: "Stilgrip Granulado 1 envelope 5g",
//         precoAnterior: "DE R$ 3,00",
//         precoAtual: "R$ 1,52",
//     },
//     {
//         img: "img/loratadina-cimed.webp",
//         alt: "LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO",
//         titulo: "Loratadina Cimed com 12 comprimidos 10mg generico",
//         precoAnterior: "DE R$ 8,99",
//         precoAtual: "R$ 6,77",
//     },
//     {
//         img: "img/nimesulida-cimed.webp",
//         alt: "NIMESULIDA CIMED COM 12 COMPRIMIDOS 100MG GENERICO",
//         titulo: "Nimesulida Cimed com 12 comprimidos 100mg generico",
//         precoAnterior: "DE R$ 12,00",
//         precoAtual: "R$ 9,90",
//     },
// ];
// infoCardMaisVendido.forEach((card) => {
//     let boxContainerMaisVendidos = document.querySelector(".mais-vendidos");
//     console.log(boxContainerMaisVendidos);

//     let divBox = document.createElement("div");
//     divBox.classList.add("box");
//     console.log(divBox);

//     let divCard = document.createElement("div");
//     divCard.classList.add("card");
//     divCard.classList.add("text-center");

//     let divCardHeader = document.createElement("div");
//     divCardHeader.classList.add("card-header");
//     divCardHeader.classList.add("d-flex");
//     divCardHeader.classList.add("align-items-center");
//     divCardHeader.classList.add("justify-content-end");

//     let iconCardHeader = document.createElement("i");
//     iconCardHeader.classList.add("fa-solid");
//     iconCardHeader.classList.add("fa-heart");
//     iconCardHeader.classList.add("fa-xl");
//     iconCardHeader.classList.add("icon-favorite");
//     iconCardHeader.classList.add("py-4");

//     let imgCard = document.createElement("img");
//     imgCard.classList.add("card-img");
//     imgCard.setAttribute("src", card.img);
//     imgCard.setAttribute("alt", card.alt);

//     let divCardBody = document.createElement("div");
//     divCardBody.classList.add("card-body");

//     let pCardBodyText = document.createElement("p");
//     pCardBodyText.classList.add("card-text");
//     pCardBodyText.innerHTML = card.titulo;

//     let h5CardBodyTitle = document.createElement("h5");
//     h5CardBodyTitle.classList.add("card-title");
//     h5CardBodyTitle.innerHTML = card.precoAnterior;

//     let h4CardBodyTitle = document.createElement("h4");
//     h4CardBodyTitle.classList.add("card-title");
//     h4CardBodyTitle.innerHTML = card.precoAtual;

//     let btnCardBody = document.createElement("a");
//     btnCardBody.classList.add("btn");
//     btnCardBody.classList.add("btn-primary");
//     btnCardBody.classList.add("btn-icon-btn");
//     btnCardBody.classList.add("gap-2");

//     let iconBtnCardBody = document.createElement("i");
//     iconBtnCardBody.classList.add("fa-solid");
//     iconBtnCardBody.classList.add("fa-plus");

//     let spanBtnCardBody = document.createElement("span");
//     spanBtnCardBody.innerHTML = "Adicionar";

//     btnCardBody.appendChild(iconBtnCardBody);
//     btnCardBody.appendChild(spanBtnCardBody);

//     divCardBody.appendChild(pCardBodyText);
//     divCardBody.appendChild(h5CardBodyTitle);
//     divCardBody.appendChild(h4CardBodyTitle);
//     divCardBody.appendChild(btnCardBody);

//     divCardHeader.appendChild(iconCardHeader);

//     divCard.appendChild(divCardHeader);
//     divCard.appendChild(imgCard);
//     divCard.appendChild(divCardBody);

//     divBox.appendChild(divCard);

//     boxContainerMaisVendidos.appendChild(divBox);
// });

/*---------------Todos os medicamentos - Página medicamentos.html---------------*/
/*
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
    console.log(boxContainerTodosOsMedicamentos);

    let divBox = document.createElement("div");
    divBox.classList.add("box");
    console.log(divBox);

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
*/
