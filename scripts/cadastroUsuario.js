const formCadastro = document.querySelector("#form-cadastro");
formCadastro.addEventListener("submit", cadastroUsuario);

const usuariosLocalStorage = localStorage.getItem("usuarios");

/*verifica se tem algum usuario cadastrado no localStorage*/
const usuariosCadastrados = usuariosLocalStorage
    ? JSON.parse(usuariosLocalStorage)
    : JSON.parse(usuarios);
console.log(usuariosCadastrados);

function verificaNomeCadastrado(nome) {
    const usuarioCadastrado = usuariosCadastrados.find(
        (usuario) => usuario.nome == nome
    );
    if (usuarioCadastrado) {
        alert("Nome de usuário já cadastrado");
        return;
    }
    return nome;
}

function verificaEmailCadastrado(email) {
    const usuarioCadastrado = usuariosCadastrados.find(
        (usuario) => usuario.email == email
    );
    if (usuarioCadastrado) {
        alert("E-mail já cadastrado");
        return;
    }
    return email;
}

function cadastroUsuario(e) {
    e.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    if (!nome.value) {
        alert("Preencha o nome");
        return;
    }

    if (!verificaNomeCadastrado(nome.value)) {
        return;
    }

    if (!email.value) {
        alert("Preencha o email");
        return;
    }

    if (!verificaEmailCadastrado(email.value)) {
        return;
    }

    if (!senha.value) {
        alert("Preencha a senha");
        return;
    }

    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
    };
    usuariosCadastrados.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
    location.href = "login.html";
}
