document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Número de WhatsApp de la clínica
    const whatsappNumber = "51910782436";

    // 2. Obtener valores de los campos
    const name = document.getElementById('userName').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    // 3. Formatear el mensaje con saltos de línea codificados
    const fullMessage = `Hola Girald-Dent, deseo realizar una consulta desde el sitio web:%0A%0A` +
                        `*Nombre:* ${encodeURIComponent(name)}%0A` +
                        `*Teléfono:* ${encodeURIComponent(phone)}%0A` +
                        `*Mensaje:* ${encodeURIComponent(message)}`;

    // 4. Generar URL y abrir en pestaña nueva
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;
    window.open(whatsappURL, '_blank');
});