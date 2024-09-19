document.getElementById('profilePicture').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('profilePreview');

    if (file) {
        const reader = new FileReader();
        
        // Cargar la imagen seleccionada y mostrarla en el elemento <img>
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    } else {
        // Si no hay imagen seleccionada, ocultar la vista previa
        preview.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const profilePicture = document.getElementById('profilePicture').files[0];

    if (username && password && profilePicture) {
        // Aquí podrías agregar la lógica para enviar los datos o autenticarlos
        console.log('Nombre:', username);
        console.log('Contraseña:', password);
        console.log('Foto de perfil:', profilePicture.name);
        
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

function ejecutarAdmin() {
    // Lógica o funcionalidad inicial del botón
    console.log("Botón presionado: Ejecutando acción...");

    // Lógica para redirigir después de ejecutar la acción
    setTimeout(function() {
        window.location.href = "aromadivino/index.html"; // Redirección a otra página
    }, 2000); // Retardo de 2 segundos (opcional)
}

function ejecutarCliente() {
    // Lógica o funcionalidad inicial del botón
    console.log("Botón presionado: Ejecutando acción...");

    // Lógica para redirigir después de ejecutar la acción
    setTimeout(function() {
        window.location.href = "aromadivino/index.html"; // Redirección a otra página
    }, 2000); // Retardo de 2 segundos (opcional)
}