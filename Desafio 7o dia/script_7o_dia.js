function soma(numUm, numDois) {
    return numUm + numDois    
}

function subtracao(numUm, numDois) {
    return numUm - numDois    
}

function multip(numUm, numDois) {
    return numUm * numDois    
}

function divisao(numUm, numDois) {
    return numUm / numDois    
}

let numUm = parseInt(prompt("Informe o primeiro número:"))
let operador = parseInt(prompt("Qual operação você deseja fazer? \n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão"))
let numDois = parseInt(prompt("Informe o segundo número:"))

switch (operador) {
    case 1:
        alert("A soma de " + numUm + " e " + numDois + " é de " + soma(numUm, numDois))
        break;
    case 2:
        alert("A subtração de " + numUm + " e " + numDois + " é de " + subtracao(numUm, numDois))
        break;
    case 3:
        alert("A multiplicação de " + numUm + " e " + numDois + " é de " + multip(numUm, numDois))
        break;
    case 4:
        alert("A divisão de " + numUm + " e " + numDois + " é de " + divisao(numUm, numDois))
        break;
    default:
        alert("Operação inválida!")
}