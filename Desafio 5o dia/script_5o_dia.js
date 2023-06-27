let frutas = []
let laticinios = []
let congelados = []
let doces = []
let outro = []

let adic = parseInt(prompt("Você deseja adicionar um item à sua lista de compras? Responda 1-SIM ou 2-NÃO"))

while (adic != 1 && adic != 2 ) {
    adic = parseInt(prompt("Opção incorreta! Se você deseja adicionar um item à sua lista de compras responda 1-SIM, caso contrário responda 2-NÃO"))
}

while (adic == 1){
    let item = prompt("Digite o nome do item que gostaria de adicionar à sua lista:")
    let tipoLista = parseInt(prompt("Qual categoria da sua lista seu item se encaixa? \n 1 - Frutas\n 2 - Laticínios\n 3 - Congelados\n 4 - Doces\n 5 - Outros"))

    while (tipoLista < 1 || tipoLista > 5) {
        tipoLista = parseInt(prompt("Opção incorreta! Qual categoria da sua lista seu item se encaixa? \n 1 - Frutas\n 2 - Laticínios\n 3 - Congelados\n 4 - Doces\n 5 - Outros"))
    }

    switch (tipoLista) {
        case 1:
            frutas.push(item)
            break;
        case 2:
            laticinios.push(item)
            break;
        case 3:
            congelados.push(item)
            break;
        case 4:
            doces.push(item)
            break;
        case 5:
            outro.push(item)
            break;
        default:
            break;
    }
    adic = parseInt(prompt("Você deseja adicionar mais algum item à sua lista de compras? Responda 1-SIM ou 2-NÃO"))
}

alert("Sua lista de compras está pronta!\n Frutas: " + frutas +"\n Laticínios: " + laticinios + "\n Congelados: " + congelados +"\n Doces: " + doces + "\n Outros: " + outro)