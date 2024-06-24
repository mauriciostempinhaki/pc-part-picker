document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', user.username);
        $('#login-message').slideDown(500);
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        $('#login-error').slideDown(500);
        setTimeout(function () {
            $('#login-error').hide();
        }, 2000);

    }
});