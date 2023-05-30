let area = parseInt(prompt("Qual área você deseja seguir? Digite 1 para Front-End 2 para Back-End"))
let aprender = ""

switch (area){
    case 1:
        area = "Front-End"
        aprender = parseInt(prompt("Você deseja aprender React (digite 1) ou aprender Vue (digite 2)?"))
        
        switch (aprender){
            case 1:
                aprender = "React"
                break
            case 2:
                aprender = "Vue"
                break
            default:
                alert("Framework inválido!")
        }
        break
    case 2:
        area = "Back-End"
        aprender = parseInt(prompt("Você deseja aprender C# (digite 1) ou aprender Java (digite 2)?"))
    
        switch (aprender){
            case 1:
                aprender = "C#"
                break
            case 2:
                aprender = "Java"
                break
            default:
                alert("Linguagem inválida!")
        }
        break
    default:
        alert("Área inválida!")
}

alert("Você deseja se tornar um profissional " + area + " e deseja aprender " + aprender)

let especializacao = parseInt(prompt("Você deseja seguir se especializando na área escolhida (digite 1) ou deseja se tornar um profissional Fullstack (digite 2)?"))

switch (especializacao){
    case 1:
        alert("Estude bastante e logo você se tornará um expert em " + area + "!")
        break
    case 2:
        alert("Estude bastante e logo você se tornará um profissional Fullstack!")
        break
    default:
        alert("Opção inválida!")
}

let continuar = true
let tec = ""

while (continuar){
    tec = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?")
    continuar = parseInt(prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1 - SIM, 2 - NÃO"))
        
        switch (continuar){
            case 1:
                continuar = true
                break
            case 2:
                continuar = false
                break
            default:
                alert("Opção inválida!")
        }
}

alert("")