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
