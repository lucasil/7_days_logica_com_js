document.getElementById("input_submit").addEventListener("click", dados)

function dados(){
    let nome = document.getElementById("input_nome").value
    let idade = document.getElementById("input_idade").value
    let linguagem = document.getElementById("input_ling").value
    let h2_mensagem = document.getElementById("mensagem")

    h2_mensagem.innerHTML = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!"


    let h2_mensagem2 = document.getElementById("mensagem2")

    h2_mensagem2.innerHTML = "Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO." 


    let div_mensagem2 = document.getElementById("div_ex_extra")

    div_mensagem2.style.display = "block"
}

document.getElementById("input_submit2").addEventListener("click", dados2)

function dados2(){
    let gosta = document.getElementById("input_gosta").value   

    if (gosta == 1){
        document.getElementById("mensagem3").innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
    } else {
        document.getElementById("mensagem3").innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?"
    }
}