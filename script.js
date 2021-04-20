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
// A validação de não repetir a mesma sequencia não funcionou
// Segui o raciocinio de que deveria pegar cada trecho da senha e
// comparar com a senha completa, usando um loop. Este fragmento 
// que seria comparado teria o tamanho de no minimo 2 caracteres, 
// até um máximo de metade do tamanho total da senha, pois não 
// tem como haver uma repetição de um termo maior que a metade.
// Entretanto, não obtive sucesso ao isolar e fazer a comparação
// destes elementos. 