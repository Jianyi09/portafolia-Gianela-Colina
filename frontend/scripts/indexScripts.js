

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/////// Ocultar contenido

function mostrarContenido(numero) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(seccion => seccion.classList.remove('activo'));

  const idObjetivo = 'contenido-' + numero;
  const seccionActiva = document.getElementById(idObjetivo);

  if (seccionActiva) {
    seccionActiva.classList.add('activo');
  }
}

///// Barra de progreso 

function animarBarra(id, porcentajeFinal) {
  let barra = document.getElementById(id);
  let width = 0;
  let intervalo = setInterval(() => {
    if (width >= porcentajeFinal) {
      clearInterval(intervalo);
    } else {
      width++;
      barra.style.width = width + "%";
      barra.textContent = width + "%";
    }
  }, 10);
}

// Ejecutar cuando se muestra el contenido 2
function mostrarContenido(numero) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(seccion => seccion.classList.remove('activo'));

  const idObjetivo = 'contenido-' + numero;
  const seccionActiva = document.getElementById(idObjetivo);

  if (seccionActiva) {
    seccionActiva.classList.add('activo');

    if (numero === 2) {
      animarBarra("bar-html", 80);
      animarBarra("bar-css", 60);
      animarBarra("bar-js", 40);
      animarBarra("bar-writting", 75)
      animarBarra("bar-listening", 60)
      animarBarra("bar-speaking", 50)
      animarBarra("bar-reading", 90)
    }
  }
}


