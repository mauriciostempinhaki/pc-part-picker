document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password,
            phone,
            address,
            email
        })
    });

    if (response.ok) {
        alert('Registro concluido com sucesso');
    } else {
        alert('Falha ao registrar');
    }
});

$(document).ready(function () {
    $('#phone').mask('(00) 0000-0000');
});