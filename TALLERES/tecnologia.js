document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botontalleres");


    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            // Define las URLs de las páginas de destino
            const urls = [
                "../../../detalle/tecnologia/desarrollo-web.html",
                "../../../detalle/tecnologia/dibujo-digital.html",
                "../../../detalle/tecnologia/redes-sociales.html"
            ];


            // Redirige a la URL correspondiente
            window.location.href = urls[index];
        });
    });
});