function senha() {
    var password = document.getElementById('senha')
    console.log(password)
    if (password.length < 8) {
        console.log("A senha deve ter entre 8 e 14 caracteres!")
    }
    if (password.length >= 8) {
        if (password.length <= 14) {
            console.log("Número de caracteres válidos!")
        } else {
            console.log("A senha deve ter entre 8 e 14 caracteres!")
        }
    }
}
function soma() {
    console.log('qualquer coisa')
}
