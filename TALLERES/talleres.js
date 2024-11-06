document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botontalleres");

    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            // Define las URLs de las páginas de destino
            const urls = [
                "../../../detalle/musica/acordeon.html",
                "../../../detalle/musica/audioperceptiva.html",
                "../../../detalle/musica/bajo-electrico.html",
                "../../../detalle/musica/bateria.html",
                "../../../detalle/musica/coro-adultos.html",
                "../../../detalle/musica/coro-ninos.html",
                "../../../detalle/musica/freestyle.html",
                "../../../detalle/musica/guitarra.html",
                "../../../detalle/musica/guitarra-electrica.html",
                "../../../detalle/musica/guitarra-ninos.html",
                "../../../detalle/musica/percusion.html",
                "../../../detalle/musica/piano.html",
                "../../../detalle/musica/piano-ninos.html",
                "../../../detalle/musica/produccion-musical.html",
                "../../../detalle/musica/saxo.html",
                "../../../detalle/musica/teclado.html",
                "../../../detalle/musica/ukelele.html",
                "../../../detalle/musica/violin.html",
                "../../../detalle/musica/vocalizacion-adultos.html",
                "../../../detalle/musica/vocalizacion-ninos.html"
            ];

            // Redirige a la URL correspondiente
            window.location.href = urls[index];
        });
    });
});
