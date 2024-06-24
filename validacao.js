document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    // Remove as opções de login e registro da navbar

    if (loggedIn === 'true' && username) {
        document.querySelectorAll('.nav-register').forEach(item => {
            item.style.display = 'none';
        });
    }

    // Remove a opção de sair da navbar

    if (loggedIn !== 'true') {
        document.querySelectorAll('.nav-logado').forEach(item => {
            item.style.display = 'none';
        });
    }
});
// Adiciona um evento de clique ao botão de logout
document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    alert('Você foi deslogado');
});
// Adiciona o nome do usuário à navbar
document.getElementById('usernameDisplay').innerText = localStorage.getItem('username');