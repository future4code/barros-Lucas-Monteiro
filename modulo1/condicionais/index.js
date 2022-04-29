/*****Exercícios de interpretação de código*****/

    //Atividade 1

        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero1 = Number(respostaDoUsuario)

        if (numero1 % 2 === 0) {
            console.log("Passou no teste.")
        } else {
            console.log("Não passou no teste.")
        }

        /*a) Explique o que o código faz. Qual o teste que ele realiza?
            Ele pede um número ao usuário, e compara se o resto deste número é
            igual a 0, se for ele imprime no console: Passou no teste.
            Caso contrário ele imprime no console: Não passou no teste.

        b) Para que tipos de números ele imprime no console "Passou no teste"?
            Os números que o resto da divisão são iguais a 0, neste caso pares

        c) Para que tipos de números a mensagem é "Não passou no teste"?
            Os números que o resto da divisão são diferentes de 0, neste caso ímpares*/

    //Atividade 2 

        let fruta = prompt("Escolha uma fruta")
        let preco
        switch (fruta) {
        case "Laranja":
            preco = 3.5
            break;
        case "Maçã":
            preco = 2.25
            break;
        case "Uva":
            preco = 0.30
            break;
        case "Pêra":
            preco = 5.5
           break; // BREAK PARA O ITEM c.
        default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

        /*a) Para que serve o código acima?
            O programa serve para a pessoa escolher uma fruta e ele retornar com
            um frase informando o valor da fruta

        b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
            O preço da fruta mação é R$ 2.25

        c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa
        no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado
        pelo comentário "BREAK PARA O ITEM c.")?
            O preço da fruta mação é R$ 5*/

    //Atividade 3

        const numero = Number(prompt("Digite o primeiro número."))

        if(numero > 0) {
        console.log("Esse número passou no teste")
            let mensagem = "Essa mensagem é secreta!!!"
        }
        
        //console.log(mensagem)

        /*a) O que a primeira linha está fazendo?
            Preenche a variável criada, com o valor digitado pelo usuário
            e já transforma uma string em um number.

        b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
        E se fosse o número -10?
            Se colocar o número 10 aparecerá Esse número passou no teste e na sequência 
            Essa mensagem é secreta!!!
            Caso ele digite -10, dará erro

        c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
            Sim, pois a variável é criada dentro do if, faz com que ela só exista dentro
            do prórpio if*/

/*****Exercícios de escrita de código*****/

    //Atividade 1

        let idade = Number(prompt("Qual a sua idade?"))

        if (idade >= 18){
            console.log("Você pode dirigir")
        } else {
            console.log("Você não pode dirigir.")
        }
        
    //Atividade 2

        let turno = prompt(`Digite uma opção conforme o horário do seu curso:
        M - Matutino;
        V - Vespertino;
        N - Noturno.`)  

        if (turno.toUpperCase() === "M"){
            console.log("Bom dia!")
        } else if (turno.toUpperCase() === "V"){
            console.log("Boa tarde!")
        } else if (turno.toUpperCase() === "N"){
            console.log("Boa noite!")
        } else{
            console.log ("Não identificamos seu horário")
        }

    //Atividade 3

        switch (turno.toUpperCase()){
            case "M" :
                console.log("Bom dia!")
            break;
            case "V" :
                console.log("Boa tarde!")
            break;
            case "N" :
               console.log("Boa noite!")
            break;
            default:
                console.log ("Não identificamos seu horário")
            break;    
        }

    //Atividade 4

        let generoFilme = prompt("Qual o gênero do filme?")
        let valorIngresso = Number(prompt("E qual o valor do ingresso?"))

        /*generoFilme.toLowerCase() == "fantasia" && valorIngresso < 15 ? 
        console.log ("Bom filme!") : console.log("Escolha outro filme :(")*/

/*****Desafios*****/

    //Desafio 1

        let lanchinho = prompt("Qual lanchinho você vai comprar?")

        generoFilme.toLowerCase() == "fantasia" && valorIngresso < 15 ? 
        console.log (`Bom filme! Aproveite o seu ${lanchinho}`) : console.log("Escolha outro filme :(")

    //Desafio 2

        let nomeCliente = prompt("Didite o seu nome?")
        
        let tipoJogo = prompt (`Qual jogo você vai assistir:
        Digite DO para doméstico;
        ou digite IN para Internacional.`)
        
        let etapaJogo = (`Qual é a etapa do jogo que você vai assistir:
        Digite SF para semi-final;
        ou digite DT para decisão do 3º lugar;
        ou digite FI para final;
        `)

        let categoria = Number(prompt ("Qual é a categoria 1, 2, 3 ou 4?"))

        let quantidade = Number(prompt("Qual a quantidade de ingressos?"))

        const dolar = 4.10