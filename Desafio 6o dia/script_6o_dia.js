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
    }
    adic = parseInt(prompt("Você deseja adicionar mais algum item à sua lista de compras? Responda 1-SIM ou 2-NÃO"))
}

let lista = parseInt(prompt("Sua lista de compras até agora!\n Frutas: " + frutas +"\n Laticínios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces + "\n Outros: " + outro + "\n Você deseja remover algum item da sua lista de compras?\n Responda 1-SIM ou 2-NÃO"))

switch (lista) {
    case 1:
        let escolLista = parseInt(prompt("Sua lista de compras até agora!\n 1 - Frutas: " + frutas +"\n 2 - Laticínios: " + laticinios + "\n 3 - Congelados: " + congelados + "\n 4 - Doces: " + doces + "\n 5 - Outros: " + outro + "\n Informe o número da categoria que você gostaria de remover algum item."))
        let item = ""

        switch (escolLista) {
            case 1:
                item = prompt("Sua categoria de Frutas até agora!\n" + frutas + "\n Qual item você gostaria de retirar da lista?")
                if (frutas.includes(item)){
                    let remov = frutas.indexOf(item)
                    frutas.splice(remov, 1)
                    alert("O " + item + "Foi removido da sua lista!")

                } else {
                    alert("Esse item já não está na sua lista!")
                }
                break;
            case 2:
                item = prompt("Sua categoria de Laticínios até agora!\n" + laticinios + "\n Qual item você gostaria de retirar da lista?")
                if (laticinios.includes(item)){
                    let remov = laticinios.indexOf(item)
                    laticinios.splice(remov, 1)
                    alert("O " + item + "Foi removido da sua lista!")

                } else {
                    alert("Esse item já não está na sua lista!")
                }
                break;
            case 3:
                item = prompt("Sua categoria de Congelados até agora!\n" + congelados + "\n Qual item você gostaria de retirar da lista?")
                if (congelados.includes(item)){
                    let remov = congelados.indexOf(item)
                    congelados.splice(remov, 1)
                    alert("O " + item + "Foi removido da sua lista!")

                } else {
                    alert("Esse item já não está na sua lista!")
                }
                break;
            case 4:
                item = prompt("Sua categoria de Doces até agora!\n" + doces + "\n Qual item você gostaria de retirar da lista?")
                if (doces.includes(item)){
                    let remov = doces.indexOf(item)
                    doces.splice(remov, 1)
                    alert("O " + item + "Foi removido da sua lista!")

                } else {
                    alert("Esse item já não está na sua lista!")
                }
                break;
            case 5:
                item = prompt("Sua categoria de Outros até agora!\n" + outro + "\n Qual item você gostaria de retirar da lista?")
                if (outro.includes(item)){
                    let remov = outro.indexOf(item)
                    outro.splice(remov, 1)
                    alert("O " + item + "Foi removido da sua lista!")

                } else {
                    alert("Esse item já não está na sua lista!")
                }
                break;
            default:
                break;
        }
        break;
    default:
        break;
}

alert("Sua lista de compras está pronta!\n Frutas: " + frutas +"\n Laticínios: " + laticinios + "\n Congelados: " + congelados +"\n Doces: " + doces + "\n Outros: " + outro)