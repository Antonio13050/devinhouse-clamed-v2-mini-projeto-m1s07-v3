function verificaUsuario() {
    const dados_usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!dados_usuario) {
        location.href = "login.html";
        return;
    }
}
verificaUsuario();
