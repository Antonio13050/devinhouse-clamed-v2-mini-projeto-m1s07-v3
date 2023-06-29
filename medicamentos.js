import { atualizaValorDocarrinho } from "./modules/atualizaValorDocarrinho.js";
/*---------------Exercicio 2---------------*/
/*---------------Todos os medicamentos - Página medicamentos.html---------------*/

let infoCardTodosOsMedicamentos = [
    {
        id: 1,
        img: "img/doralgina.webp",
        alt: "DORALGINA COM 4 DRÁGEAS",
        titulo: "Doralgina com 4 drágeas",
        precoAnterior: "DE R$ 2,00",
        precoAtual: "R$ 1,56",
    },
    {
        id: 2,
        img: "img/stilgrip.webp",
        alt: "STILGRIP GRANULADO 1 ENVELOPE 5G",
        titulo: "Stilgrip Granulado 1 envelope 5g",
        precoAnterior: "DE R$ 3,00",
        precoAtual: "R$ 1,52",
    },
    {
        id: 3,
        img: "img/loratadina-cimed.webp",
        alt: "LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO",
        titulo: "Loratadina Cimed com 12 comprimidos 10mg generico",
        precoAnterior: "DE R$ 8,99",
        precoAtual: "R$ 6,77",
    },
    {
        id: 4,
        img: "img/nimesulida-cimed.webp",
        alt: "NIMESULIDA CIMED COM 12 COMPRIMIDOS 100MG GENERICO",
        titulo: "Nimesulida Cimed com 12 comprimidos 100mg generico",
        precoAnterior: "DE R$ 12,00",
        precoAtual: "R$ 9,90",
    },
    {
        id: 5,
        img: "img/doralgina.webp",
        alt: "DORALGINA COM 4 DRÁGEAS",
        titulo: "Doralgina com 4 drágeas",
        precoAnterior: "DE R$ 2,00",
        precoAtual: "R$ 1,56",
    },
    {
        id: 6,
        img: "img/stilgrip.webp",
        alt: "STILGRIP GRANULADO 1 ENVELOPE 5G",
        titulo: "Stilgrip Granulado 1 envelope 5g",
        precoAnterior: "DE R$ 3,00",
        precoAtual: "R$ 1,52",
    },
    {
        id: 7,
        img: "img/loratadina-cimed.webp",
        alt: "LORATADINA CIMED COM 12 COMPRIMIDOS 10MG GENERICO",
        titulo: "Loratadina Cimed com 12 comprimidos 10mg generico",
        precoAnterior: "DE R$ 8,99",
        precoAtual: "R$ 6,77",
    },
    {
        id: 8,
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
    btnCardBody.classList.add("add");
    btnCardBody.setAttribute("id", card.id);

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
/*---------------Exercicio 3---------------*/
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarAoCarrinho(e) {
    console.clear();
    const botao = e.target.closest(".add");
    const id = parseInt(botao.getAttribute("id"));
    console.log(id);

    const produtoExistente = carrinho.find((produto) => produto.id === id);
    console.log(produtoExistente);
    if (produtoExistente) {
        console.log("O produto já está no carrinho.");
        return;
    }

    carrinho.push(infoCardTodosOsMedicamentos[id - 1]);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    console.log(carrinho);

    atualizaValorDocarrinho(carrinho);
}

let botoes = document.querySelectorAll(".add");

botoes.forEach((botao) => {
    botao.addEventListener("click", adicionarAoCarrinho);
});

const btnCarrino = document.querySelector(".btn-carrinho");
btnCarrino.addEventListener("click", exibirConteudoCarrinho);

function exibirConteudoCarrinho() {
    const offcanvasCarrinho = document.querySelector(".offcanvas-body");
    offcanvasCarrinho.innerHTML = "";
    let valorTotalCarrinho = 0;
    valorTotalCarrinho = 0;

    const listaProdutos = document.createElement("div");
    listaProdutos.classList.add("lista-produtos");

    const footerCarrinho = document.createElement("footer");

    carrinho.forEach((produto) => {
        const itemCarrinho = document.createElement("div");
        itemCarrinho.classList.add("item-carrinho");
        itemCarrinho.classList.add("mb-4");
        itemCarrinho.classList.add("d-flex");
        itemCarrinho.classList.add("d-column");
        itemCarrinho.classList.add("flex-wrap");

        const divItemHeaderCarrinho = document.createElement("div");
        const divItemBodyCarrinho = document.createElement("div");
        divItemBodyCarrinho.classList.add("d-flex");
        divItemBodyCarrinho.classList.add("d-column");

        const nomeItemCarrinho = document.createElement("p");
        nomeItemCarrinho.innerHTML = produto.titulo;

        divItemHeaderCarrinho.appendChild(nomeItemCarrinho);
        itemCarrinho.appendChild(divItemHeaderCarrinho);

        const imgItemCarrinho = document.createElement("img");
        imgItemCarrinho.setAttribute("src", produto.img);
        imgItemCarrinho.setAttribute("alt", produto.alt);
        imgItemCarrinho.classList.add("w-25");

        divItemBodyCarrinho.appendChild(imgItemCarrinho);

        const divItemPrecoCarrinho = document.createElement("div");

        const divPrecoItemCarrinhoAnterior = document.createElement("div");
        const precoitemCarrinhoAnterior = document.createElement("s");
        precoitemCarrinhoAnterior.innerHTML = produto.precoAnterior;
        divPrecoItemCarrinhoAnterior.appendChild(precoitemCarrinhoAnterior);

        divItemPrecoCarrinho.appendChild(divPrecoItemCarrinhoAnterior);

        const precoitemCarrinho = document.createElement("p");
        precoitemCarrinho.classList.add("fw-bold");
        precoitemCarrinho.classList.add("ms-2");
        precoitemCarrinho.innerHTML = produto.precoAtual;

        divItemPrecoCarrinho.appendChild(precoitemCarrinho);

        divItemBodyCarrinho.appendChild(divItemPrecoCarrinho);

        const buttonRemoverCarrinho = document.createElement("a");
        buttonRemoverCarrinho.classList.add("btn");
        buttonRemoverCarrinho.classList.add("btnRemoverCarrinho");
        buttonRemoverCarrinho.setAttribute("id", `remove${produto.id}`);

        const iconButtonRemoverCarrinho = document.createElement("i");
        iconButtonRemoverCarrinho.classList.add("fa-solid");
        iconButtonRemoverCarrinho.classList.add("fa-trash-can");
        iconButtonRemoverCarrinho.classList.add("fa-lg");

        buttonRemoverCarrinho.appendChild(iconButtonRemoverCarrinho);

        divItemBodyCarrinho.appendChild(buttonRemoverCarrinho);

        itemCarrinho.appendChild(divItemBodyCarrinho);

        // itemCarrinho.appendChild(nomeItemCarrinho);
        // itemCarrinho.appendChild(imgItemCarrinho);
        // itemCarrinho.appendChild(divPrecoItemCarrinhoAnterior);
        // itemCarrinho.appendChild(precoitemCarrinho);
        // itemCarrinho.appendChild(buttonRemoverCarrinho);

        listaProdutos.appendChild(itemCarrinho);

        let precoNumber = parseFloat(
            produto.precoAtual.replace("R$", "").replace(",", ".").trim()
        );

        valorTotalCarrinho += precoNumber;

        footerCarrinho.innerHTML = `<h4>Valor total: R$ ${valorTotalCarrinho.toFixed(
            2
        )}</h4>`;
        atualizaValorDocarrinho(carrinho);
    });

    offcanvasCarrinho.appendChild(listaProdutos);
    offcanvasCarrinho.appendChild(footerCarrinho);

    let btnRemoverCarrinho = document.querySelectorAll(".btnRemoverCarrinho");

    function cliquei(e) {
        const botao = e.target.closest(".btnRemoverCarrinho");
        const idSemFormatacao = botao.getAttribute("id");
        const id = Number(idSemFormatacao.replace(/\D/g, ""));

        const index = carrinho.findIndex((item) => item.id === id);

        if (index !== -1) {
            carrinho.splice(index, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        } else {
            console.log("Item não encontrado no carrinho");
        }

        exibirConteudoCarrinho();
    }

    btnRemoverCarrinho.forEach((botao) => {
        botao.addEventListener("click", cliquei);
    });
    atualizaValorDocarrinho(carrinho);
}

atualizaValorDocarrinho(carrinho);
