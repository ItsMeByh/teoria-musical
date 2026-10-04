// Salva os dados do aluno
function salvarPerfil() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const objetivo = document.getElementById("objetivo").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("objetivo", objetivo);

    alert("Perfil criado com sucesso! 🎵");
}
