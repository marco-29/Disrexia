var objetos = [   
    {  
       nombre: "pingüino",        
        imagen: "../../img/pinguino.png",        
        audio: "../../ejercicios/sonidos/biblioteca.mp3",        
        respuesta: "pingÜino",        
        incorrectas: ["qingÜino", "dingÜino", "bingÜino"]
   },
   {
       nombre: "bufanda",
       imagen: "../../img/bufanda.png",
       audio: "../../ejercicios/sonidos/buho.mp3",
       respuesta: "bufanda",
       incorrectas: ["pufanda", "dufanda", "qufanda"]
   },
   {
       nombre: "perro",
       imagen: "../../img/perro-nieve.png",
       audio: "../../ejercicios/sonidos/barco.mp3",
       respuesta: "perro",
       incorrectas: ["berro", "derro", "qerro"]
   },
   {
       nombre: "abeja",
       imagen: "../../ejercicios/imagenes/abeja.png",
       audio: "../../ejercicios/sonidos/abeja.mp3",
       respuesta: "abeja",
       incorrectas: ["adeja", "apeja", "aqega"]
   },
   {
       nombre: "copo",
       imagen: "../../img/copo.png",
       audio: "../../ejercicios/sonidos/bombilla.mp3",
       respuesta: "copo",
       incorrectas: ["codo", "cobo", "coqo"]
   },
   {
       nombre: "queso",
       imagen: "../../img/queso..png",
       audio: "../../ejercicios/sonidos/queso.mp3",
       respuesta: "queso",
       incorrectas: ["pueso", "bueso", "dueso"]
   },
   {
    nombre: "dado",
    imagen: "../../img/dado.png",
    audio: "../../ejercicios/sonidos/queso.mp3",
    respuesta: "dado",
    incorrectas: ["babo", "pado", "qapo"]
    },
];

var indiceObjetoActual = 0;
var respuestasCorrectas = 0;
let puntaje = document.getElementById("puntaje");

function reproducirAudio() {
	var audio = new Audio("../sonidos/buscab.mp3");
	audio.play();
}

function seleccionarObjetoAleatorio() {
	var indice = Math.floor(Math.random() * objetos.length);
	var objeto = objetos[indice];
	indiceObjetoActual = indice;
	return objeto;
}


function mostrarObjeto(objeto) {
  var objetoEl = document.getElementById("objeto");
  objetoEl.style.backgroundImage = "url(" + objeto.imagen + ")";

  var audio = new Audio(objeto.audio);

  objetoEl.onclick = function() {
    audio.play();
  };
}

function mostrarOpciones(objeto) {
	var opcionesEl = document.getElementById("opciones");
	var respuestasIncorrectas = objeto.incorrectas.filter(function(respuesta) {
		return respuesta !== objeto.respuesta;
	});
	respuestasIncorrectas = shuffle(respuestasIncorrectas);
	respuestasIncorrectas.length = 3;
	var opciones = [objeto.respuesta].concat(respuestasIncorrectas);
	opciones = shuffle(opciones);
	var opcionEls = document.getElementsByClassName("opcion");
	for (var i = 0; i < opcionEls.length; i++) {
		opcionEls[i].innerHTML = opciones[i];
	}
}

function verificarRespuesta(opcionEl) {
    var respuesta = opcionEl.innerHTML;
    var objeto = objetos[indiceObjetoActual];
    if (respuesta === objeto.respuesta) {
        respuestasCorrectas++;
        alert("¡Correcto!");
        if (respuestasCorrectas === 3) {
            alert("¡Correcto! Pasas al siguiente nivel.");
            // window.location.href = "./completab.html";
            respuestasCorrectas = 0;
        }
    } else {
        alert("Incorrecto, intenta de nuevo");
    }
    var objetoNuevo = seleccionarObjetoAleatorio();
    mostrarObjeto(objetoNuevo);
    mostrarOpciones(objetoNuevo);
    puntaje.innerHTML = respuestasCorrectas;
}


function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var objetoInicial = seleccionarObjetoAleatorio();
mostrarObjeto(objetoInicial);
mostrarOpciones(objetoInicial);