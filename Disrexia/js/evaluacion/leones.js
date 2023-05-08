let correctAnswers = 0;
const puntajeb = document.getElementById('puntajeb');
const puntajed = document.getElementById('puntajed');
const puntajep = document.getElementById('puntajep');
const puntajeq = document.getElementById('puntajeq');

function checkAnswer() {
    let answerb = document.getElementById('answerb').value.toString();
    let answerd = document.getElementById('answerd').value.toString();
    let answerp = document.getElementById('answerp').value.toString();
    let answerq = document.getElementById('answerq').value.toString();
    if (answerb == '6') {
        puntajeb.innerHTML = answerb = "correcto, encontraste todas las letras b";
    } else if (answerb <= '6') {
        puntajeb.innerHTML = answerb = "te faltaron letras b por encontrar";
    } else {
        puntajeb.innerHTML = answerb = "contaste letras que no son b";
    }

    if (answerd == '5') {
        puntajed.innerHTML = answerd = "correcto, encontraste todas las letras d";
    } else if (answerd <= '5') {
        puntajed.innerHTML = answerd = "te faltaron letras d por encontrar";
    } else {
        puntajed.innerHTML = answerd = "contaste letras que no son d";
    }

    if (answerp == '5') {
        puntajep.innerHTML = answerp = "correcto, encontraste todas las letras p";
    } else if(answerp <= '5') {
        puntajep.innerHTML = answerp = "te faltaron letras p por encontrar";
    } else {
        puntajep.innerHTML = answerp = "contaste letras que no son p";
    }

    if (answerq == '4') {
        puntajeq.innerHTML = answerq = "correcto, encontraste todas las letras q";
    } else if (answerq <= '4') {
        puntajeq.innerHTML = answerq = "te faltaron letras q por encontrar";
    } else {
        puntajeq.innerHTML = answerq = "contaste letras que no son q";
    }

}

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