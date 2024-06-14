function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const hardcodedUsername = 'Agente P';
    const hardcodedPassword = 'Perry';

    if (username === hardcodedUsername && password === hardcodedPassword) {
        alert('Login exitoso');
    } else {
        alert('Credenciales incorrectas');
    }
}