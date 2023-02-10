const mostrarYOcultarElementos = () => {
  let element = document.querySelector('.ini__avatar');
  let position = element.getBoundingClientRect();
  let waves = document.getElementById('waves').style;

  if(position.bottom < 0 && waves.opacity == 1) {
    waves.opacity = 0;
  }
  if(position.bottom > 0 && waves.opacity == 0) {
    waves.opacity = 1;
  }
}

mostrarYOcultarElementos();

window.addEventListener('scroll', function() {
  mostrarYOcultarElementos();
});
