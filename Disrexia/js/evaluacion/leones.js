function cambiar_fondo_b(x) {
    if(x.style.background=="rgb(6, 155, 1)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#069B01";
    }
    return false;
}

function cambiar_fondo_d(x) {
    if(x.style.background=="rgb(1, 136, 155)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#01889B";
    }
    return false;
}

function cambiar_fondo_p(x) {
    if(x.style.background=="rgb(243, 21, 21)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#F31515";
    }
    return false;
}

function cambiar_fondo_q(x) {
    if(x.style.background=="rgb(216, 21, 243)") {
        x.style.background="#00000071";
    }else {
        x.style.background="#D815F3";
    }
    return false;
}

let correctAnswers = 0;
let b = 6;

function checkAnswer() {
    let answerb = document.getElementById('answer-b');
    let answerd = document.getElementById('answer-d');
    let answerp = document.getElementById('answer-p');
    let answerq = document.getElementById('answer-q');
    if (answerb === b) {
    //   document.getElementById('result').textContent = '¡Correcto!';
      correctAnswers++;
      alert("¡Correcto!");
      if (correctAnswers === 3) {
        // Avanzar a la siguiente página
        alert("Has completado todos los ejercicios de la letra 'b'.");
        window.location.href = '../menuEjercicios.html';
      } else {
        // Avanzar a la siguiente palabra
        currentWord = words[Math.floor(Math.random() * words.length)];
        hiddenWord = currentWord.word.replace(/[bdpq]/g, '_');
        document.getElementById('word').textContent = hiddenWord;
        document.getElementById('answer').value = '';
        document.getElementById('result').textContent = '';

        // Actualizar imagen y sonido
        document.getElementById('image').src = currentWord.image;
        document.getElementById('audio').src = currentWord.audio;
      }
    } else {
      alert("Incorrecto, intenta de nuevo");
    }
  }