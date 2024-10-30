document.getElementById('Limpiar').addEventListener('click',function(){
    document.getElementById('TM_Form').reset(); 
    });

document.getElementById('TM_Form').addEventListener('submit', function(event) {
    // Obtén los valores de los campos
    const nombre = document.getElementById('Nombre').value.trim();
    const apellido = document.getElementById('Apellido').value.trim();
    const correo = document.getElementById('Correo_Electrónico').value.trim();
    const consulta = document.getElementById('Consulta').value.trim();

    // Verifica si algún campo está vacío
    if (nombre === '' || apellido === '' || correo === '' || consulta === '') {
        alert('Por favor, completa todos los campos antes de enviar.');
        event.preventDefault();
        return; // Detiene la ejecución
    }

    // Expresión regular para validar el formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica si el correo electrónico es válido
    if (!emailPattern.test(correo)) {
        alert('Colocar un mail correcto');
        event.preventDefault();
        return;
    }

        // Crea el mensaje para WhatsApp
        const mensaje = `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nConsulta: ${consulta}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        
        // Número de teléfono al que se enviará el mensaje (sin el símbolo +)
        const numeroTelefono = '15628900'; // Reemplaza con el número de destino
    
        // Crea la URL de WhatsApp
        const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
    
        // Redirige a la URL de WhatsApp
        window.open(urlWhatsApp, '_blank');
});

