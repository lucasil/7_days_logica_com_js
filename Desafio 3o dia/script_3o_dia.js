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
    tec = parseInt(prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer? Java (digite 1) Python (digite 2), Cobol (digite 3), PhP (digite 4)"))
    
        switch (tec) {
            case 1:
                alert("Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.")
                break
            case 2:
                alert("O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.")
                break
            case 3:
                alert("A linguagem Cobol foi criada com o objetivo de oferecer maior controle aos negócios — especialmente para as instituições ligadas à área financeira. Devido à sua elevada capacidade de processamento e às normas específicas de segurança que foram desenvolvidas ao longo das décadas, o Cobol ainda é considerado uma das melhores linguagens para a área corporativa.")
                break
            case 4:
                alert("O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor ) é uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.")
                break
            default:
                alert("Opção inválida!")        
        }

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