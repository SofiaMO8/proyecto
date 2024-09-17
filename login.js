document.getElementById('profile-pic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imgElement = document.getElementById('profile-preview');
        imgElement.src = e.target.result;
        imgElement.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const profilePic = document.getElementById('profile-pic').files[0];

    if (username && password && profilePic) {
        alert('Login exitoso! Bienvenido, ' + username);
        // Aquí puedes añadir lógica adicional para enviar los datos al servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
