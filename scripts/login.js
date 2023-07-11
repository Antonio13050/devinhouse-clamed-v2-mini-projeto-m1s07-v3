const formLogin = document.querySelector("#form-login");
formLogin.addEventListener("submit", validarLogin);

function validarLogin(e) {
    e.preventDefault();
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    const dadosLogin = JSON.parse(usuarios);
    const usuarioCadastrado = dadosLogin.find(
        (usuario) => usuario.email == email.value
    );
    if (!usuarioCadastrado) {
        alert("Usuário não cadastrado");
        return;
    }

    if (usuarioCadastrado.senha != senha.value) {
        alert("Senha incorreta");
        return;
    }
    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({
            nome: usuarioCadastrado.nome,
            email: usuarioCadastrado.email,
        })
    );
    location.href = "index.html";
}
