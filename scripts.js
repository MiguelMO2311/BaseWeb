document.addEventListener('DOMContentLoaded', function() {
    // Interactividad de la galería de proyectos
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const img = document.createElement('img');
            img.src = this.src;
            modal.appendChild(img);
            document.body.appendChild(modal);
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });

    // Validación del formulario de contacto
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Formulario enviado con éxito');
            form.reset();
        } else {
            alert('Por favor, rellene todos los campos');
        }
    });
});
