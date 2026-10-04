function salvarPerfil() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const objetivo = document.getElementById("objetivo").value;

    // Verifica se os campos obrigatórios foram preenchidos
    if (nome === "" || idade === "" || nivel === "" || objetivo === "") {
        alert("Preencha todas as informações antes de continuar 🎵");
        return;
    }

    // Salva os dados no navegador
    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("objetivo", objetivo);

    localStorage.setItem("cadastroConcluido", "sim");

    // Mensagem de boas-vindas
    alert("Tudo pronto, " + nome + "! 🎉 Sua jornada musical vai começar.");

    // Por enquanto, leva para a página inicial do próprio site
    window.location.href = "inicio.html";
}
