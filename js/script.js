document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        const icon = menuToggle.querySelector('i');
        const setMenuState = (isOpen) => {
            navMenu.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
         
            if (icon) {
                icon.classList.toggle('fa-xmark', isOpen);
                icon.classList.toggle('fa-bars', !isOpen);
            }
        };
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            setMenuState(!isOpen);
        });
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    setMenuState(false);
                }
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenuState(false);
                menuToggle.focus();
            }
        });
    }

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.nav-menu a');

    allNavLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        link.classList.remove('active');
        link.removeAttribute('aria-current');

        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const whatsappNumber = "51978300924";
            const name = document.getElementById('userName').value.trim();
            const phone = document.getElementById('userPhone').value.trim();
            const message = document.getElementById('userMessage').value.trim();
            const rawText = `Hola Girald-Dent, deseo realizar una consulta desde el sitio web:\n\n` +
                            `*Nombre:* ${name}\n` +
                            `*Teléfono:* ${phone}\n` +
                            `*Mensaje:* ${message}`;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawText)}`;
            window.open(whatsappURL, '_blank', 'noopener,noreferrer');
            whatsappForm.reset();
        });
    }
});