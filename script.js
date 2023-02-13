const mostrarYOcultarElementos = () => {
  let element1 = document.querySelector('.ini__avatar');
  let element2 = document.querySelector('#contacto');
  let position1 = element1.getBoundingClientRect();
  let position2 = element2.getBoundingClientRect();
  let waves = document.getElementById('waves').style;

  if((position1.bottom < 0 || position2.top != 0 ) && waves.opacity == 1) {
    waves.opacity = 0;
  }
  if((position1.bottom > 0 || position2.top == 0) && waves.opacity == 0) {
    waves.opacity = 1;
  }
}

mostrarYOcultarElementos();

window.addEventListener('scroll', function() {
  mostrarYOcultarElementos();
});
