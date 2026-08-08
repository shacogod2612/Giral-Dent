document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. LÓGICA DEL MENÚ HAMBURGUESA (RESPONSIVE)
    // =========================================================
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        // Abrir / Cerrar menú al hacer clic en el botón
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            
            // Actualizar atributo ARIA para accesibilidad
            menuToggle.setAttribute('aria-expanded', isOpen);

            // Cambiar ícono de barras a 'X'
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Cerrar el menú al hacer clic en cualquier enlace interno
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    
                    const icon = menuToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });

        // Cerrar menú si el usuario presiona la tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus(); // Devuelve el foco al botón

                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // =========================================================
    // 2. ACTIVACIÓN AUTOMÁTICA DEL ENLACE DE NAVEGACIÓN
    // =========================================================
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-menu a');

    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Limpia estados previos
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        // Asigna clase activa según la ruta actual
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // =========================================================
    // 3. ENVÍO DE FORMULARIO A WHATSAPP
    // =========================================================
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Número de WhatsApp de la clínica
            const whatsappNumber = "51910782436";

            // Obtener valores de los campos
            const name = document.getElementById('userName').value.trim();
            const phone = document.getElementById('userPhone').value.trim();
            const message = document.getElementById('userMessage').value.trim();

            // Formatear el mensaje con saltos de línea codificados
            const fullMessage = `Hola Girald-Dent, deseo realizar una consulta desde el sitio web:%0A%0A` +
                                `*Nombre:* ${encodeURIComponent(name)}%0A` +
                                `*Teléfono:* ${encodeURIComponent(phone)}%0A` +
                                `*Mensaje:* ${encodeURIComponent(message)}`;

            // Generar URL y abrir en pestaña nueva
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
            window.open(whatsappURL, '_blank');
        });
    }

});