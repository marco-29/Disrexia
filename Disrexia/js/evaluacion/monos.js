function reproducirSonidoIzquierda() {
  const sonidoIzquierda = document.getElementById("sonido-izquierda");
  sonidoIzquierda.currentTime = 0;
  sonidoIzquierda.play();
}

let contadorRespuestasCorrectas = 0;

const btnIzquierda = document.getElementById('izquierda');
const btnDerecha = document.getElementById('derecha');
const puntaje = document.getElementById('puntaje');
const imagenBanana = document.getElementById('banana');
const imagenMani = document.getElementById('mani');
const imagenPina = document.getElementById('pina');
const imagenBanana2 = document.getElementById('banana2');

const imagenesFrutas = [
    '../../img/banana.png',
    '../../img/mani.png'
];

function mostrarFrutaAleatoria() {
  const indice = Math.floor(Math.random() * imagenesFrutas.length);
  const fruta = imagenesFrutas[indice];
  if (fruta === '../../img/banana.png') {
    // alert("banana");
      imagenBanana.style.visibility = "visible";
      imagenMani.style.visibility = "visible";
      imagenPina.style.visibility = "hidden";
      imagenBanana2.style.visibility = 'hidden';
  } else {
    // alert("mani");
      imagenBanana2.style.visibility = 'visible';
      imagenMani.style.visibility = 'hidden';
      imagenPina.style.visibility = 'visible';
      imagenBanana.style.visibility = 'hidden';
  }
  return indice; // devuelve el índice de la imagen mostrada
}

const respuestaCorrecta = {
  0: 'izquierda', // imagen de banana izquierda
  1: 'derecha' // imagen de banana2 derecha
};

function verificarRespuesta(respuestaUsuario, indiceImagen) {
  const respuestaEsperada = respuestaCorrecta[indiceImagen];
  if (respuestaUsuario === respuestaEsperada) {
    contadorRespuestasCorrectas++; // incrementar el contador de respuestas correctas
    alert("¡Correcto!");
    if (contadorRespuestasCorrectas === 3) {
    alert("¡Correcto! ahora regresemos al menu principal");
      window.location.href = '../../evaluación/evaluacion.html'; // redireccionar a otro archivo
    }
  } else {
    alert("Incorrecto, intenta de nuevo");
  }
  puntaje.innerHTML= contadorRespuestasCorrectas;
}

let indiceImagenActual = mostrarFrutaAleatoria();

btnIzquierda.addEventListener('click', function() {
    verificarRespuesta('izquierda', indiceImagenActual);
    indiceImagenActual = mostrarFrutaAleatoria(); // mostramos una nueva imagen aleatoria
});
  
btnDerecha.addEventListener('click', function() {
  verificarRespuesta('derecha', indiceImagenActual);
  indiceImagenActual = mostrarFrutaAleatoria(); // mostramos una nueva imagen aleatoria
});