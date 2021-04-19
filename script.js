var senha = document.getElementById('pw');
var minuscula = document.getElementById('minuscula');
var maiuscula = document.getElementById('maiuscula');
var numero = document.getElementById('numero');
var tamanho = document.getElementById('tamanho');
var caractere = document.getElementById('caractere');

senha.onfocus = function () {
    document.getElementById("mensagem").style.display = "block";
}
senha.onblur = function () {
    document.getElementById("mensagem").style.display = "none";
}
senha.onkeyup = function () {

    if (senha.value.length >= 8 && senha.value.length < 15) {
        tamanho.classList.remove("invalido");
        tamanho.classList.add("valido");
    } else {
        tamanho.classList.remove("valido");
        tamanho.classList.add("invalido");
    }

    var numeral = /[0-9]/g;
    if (senha.value.match(numeral)) {
        numero.classList.remove("invalido");
        numero.classList.add("valido");
    } else {
        numero.classList.remove("valido");
        numero.classList.add("invalido");
    }
    var letrasMinusculas = /[a-z]/g;
    if (senha.value.match(letrasMinusculas)) {
        minuscula.classList.remove("invalido");
        minuscula.classList.add("valido");
    } else {
        minuscula.classList.remove("valido");
        minuscula.classList.add("invalido");
    }
    var letraMaiuscula = /[A-Z]/g;
    if (senha.value.match(letraMaiuscula)) {
        maiuscula.classList.remove("invalido");
        maiuscula.classList.add("valido");
    } else {
        maiuscula.classList.remove("valido");
        maiuscula.classList.add("invalido");
    }
    var especial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if (senha.value.match(especial)) {
        caractere.classList.remove("invalido");
        caractere.classList.add("valido");
    } else {
        caractere.classList.remove("valido");
        caractere.classList.add("invalido");
    }

}