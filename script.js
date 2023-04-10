const mostrarYOcultarElementos = () => {
  let inicio = document.querySelector('#inicio').getBoundingClientRect();
  let contacto = document.querySelector('#contacto').getBoundingClientRect();
  let waves = document.getElementById('waves').style;

  if((inicio.bottom < 0 || contacto.top != 0 ) && waves.opacity == 1) {
    waves.opacity = 0;
  }
  if((inicio.top == 0 || contacto.top == 0) && waves.opacity == 0) {
    waves.opacity = 1;
  }
}

mostrarYOcultarElementos();

window.addEventListener('scroll', function() {
  mostrarYOcultarElementos();
});
