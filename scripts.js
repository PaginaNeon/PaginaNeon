document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado y procesado');
    
    // Añadir funcionalidad al botón
    document.querySelector('.button').addEventListener('click', showAlert);

    // Añadir una animación al pasar el mouse sobre los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.animation = 'none';
        });
        link.addEventListener('mouseout', () => {
            link.style.animation = 'neon 1.5s ease-in-out infinite alternate';
        });
    });
});

function showAlert() {
    alert('¡Gracias por visitar nuestra página!');
}
