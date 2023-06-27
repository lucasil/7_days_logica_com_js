let numeroSecreto = 0
let tentativa = 0

numeroSecreto = parseInt(Math.random() * 10)

alert("Bem vindo ao jogo do número secreto! Sua tarefa é adivinhar qual o número secreto, mas cuidado, você só tem TRêS tentativas!")

do {
    tentativa++

    alert("Tentativa número: " + tentativa)
    let resp = parseInt(prompt("Tente adivinhar um número entre 0 a 10:"))

    while (resp < 0 || resp > 10) {
        resp = parseInt(prompt("Número inválido! Tente adivinhar um número entre 0 a 10:"))
    }

    if (resp == numeroSecreto) {
        alert("Parabéns, você adivinhou corretamente o número secreto! :)")
        break
    } else {
        alert("Que pena! Você não conseguiu adivinhar o número secreto! :(")
    }
} while (tentativa < 3)

alert("Fim de jogo! O número secreto era: " + numeroSecreto)