document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botontalleres");


    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            // Define las URLs de las páginas de destino
            const urls = [
                "./../../detalle/musica/acordeon.html",
                "./../../detalle/musica/audioperceptiva.html",
                "./../../detalle/musica/bajoelectrico.html",
                "./../../detalle/musica/bateria.html",
                "./../../detalle/musica/coroadultos.html",
                "./../../detalle/musica/coroinfantil.html",
                "./../../detalle/musica/freestyle.html",
                "./../../detalle/musica/guitarra.html",
                "./../../detalle/musica/guitarra.electrica.html",
                "./../../detalle/musica/guitarraninos.html",
                "./../../detalle/musica/percusion.html",
                "./../../detalle/musica/piano.html",
                "./../../detalle/musica/pianoinfantil.html",
                "./../../detalle/musica/produccion-musical.html",
                "./../../detalle/musica/saxo.html",
                "./../../detalle/musica/teclado.html",
                "./../../detalle/musica/ukelele.html",
                "./../../detalle/musica/violin.html",
                "./../../detalle/musica/vocalizacion-adultos.html",
                "./../../detalle/musica/vocalizacion-ninos.html"
            ];


            // Redirige a la URL correspondiente
            window.location.href = urls[index];
        });
    });
});
