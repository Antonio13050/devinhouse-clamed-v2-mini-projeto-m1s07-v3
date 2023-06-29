export function atualizaValorDocarrinho(carrinho) {
    let contadorCarrinho = document.querySelector(".fa-stack");

    contadorCarrinho.setAttribute("data-count", carrinho.length);
}
