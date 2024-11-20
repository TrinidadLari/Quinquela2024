const botones = document.querySelectorAll('.botones-eventos');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const divEvento = boton.nextElementSibling;

    if (divEvento) {
      divEvento.classList.toggle('evento-oculto');
    }
  });
});