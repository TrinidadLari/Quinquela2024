document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".botontalleres");


    botones.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            // Define las URLs de las páginas de destino
            const urls = [
                "../../../detalle/plastica/ajedrez.html",
                "../../../detalle/plastica/alambrismo.html",
                "../../../detalle/plastica/alfarería.html",
                "../../../detalle/plastica/bordado-tradicional-y-mexicano.html",
                "../../../detalle/plastica/bordado-indu.html",
                "../../../detalle/plastica/ceramica.html",
                "../../../detalle/plastica/comic.html",
                "../../../detalle/plastica/crochet.html",
                "../../../detalle/plastica/dibujo-y-pintura.html",
                "../../../detalle/plastica/escritura-poetica.html",
                "../../../detalle/plastica/fieltro.html",
                "../../../detalle/plastica/fotografia-creativa.html",
                "../../../detalle/plastica/laboratorio-de-arte.html",
                "../../../detalle/plastica/macrame.html",
                "../../../detalle/plastica/mosaiquismo.html",
                "../../../detalle/plastica/pintura-decorativa.html",
                "../../../detalle/plastica/porcelana-fria.html",
                "../../../detalle/plastica/taller-literario.html",
                "../../../detalle/plastica/tejido-2-agujas.html",
                "../../../detalle/plastica/telar.html"
            ];


            // Redirige a la URL correspondiente
            window.location.href = urls[index];
        });
    });
});
