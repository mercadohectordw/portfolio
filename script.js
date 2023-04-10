
const mostrarYOcultarElementos = () => {
  let waves = document.getElementById('waves');
  let inicio = document.getElementById('inicio').getBoundingClientRect();
  let contacto = document.getElementById('contacto').getBoundingClientRect();

  if((inicio.top >= 0 || contacto.top < 200) && waves.style.opacity == 0) {
    waves.style.opacity = 1; return;
  }
  if((inicio.top < 0 && contacto.top >= 200) && waves.style.opacity == 1) {
    waves.style.opacity = 0; return;
  }
}

mostrarYOcultarElementos();

window.addEventListener('scroll', function() {
  mostrarYOcultarElementos();
});

const toggleMobileMenu = () => {
  let mobileMenu = document.getElementById("mobileMenu").style;
  console.log("2");
  mobileMenu.display == "none"
    ? mobileMenu.display = "flex"
    : mobileMenu.display = "none";
}