
const formulario = document.getElementById("login-form");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeUsuario = usuario.value.trim();
    const senhaUsuario = senha.value;

    if (!nomeUsuario || !senhaUsuario.trim()) {
        mensagem.textContent = "Preencha o usuário e a senha.";
        return;
    }

    // A página login.html e selecao.html
    // estão dentro da mesma pasta: src/pages/
    window.location.href = "selecao.html";
});
