/*Exercícios de interpretação de código
 * 
    -----Atividade 1-----

        let valor = 0
        
        for(let i = 0; i < 5; i++) {
            valor += i
        }
        
        console.log(valor)

        Ele fez declaror uma variável que será seu iniciador onde começará com 0
        e o for começará e repetirá enquanto o valor for menor que 5.
        E toda vez que o laço se repetir a variável valor irá somar os valores da 
        variável i.

        O resultado mostrado na tela será 10 que é o resultado de 0+1+2+3+4

    -----Atividade 2-----

        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        
        for (let numero of lista) {
            if (numero > 18) {
		        console.log(numero)
	        }
        }

        a) O que vai ser impresso no console?

            Irá imprimir os números 19, 21, 23, 25, 27, 30

        b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
        o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

            sim Colocaria uma variável que iniciria com 0 e a cada repetição
            seria acrescentado mais 1.

    -----Atividade 3-----

        const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        
        while(quantidadeAtual < quantidadeTotal){
            
            let linha = ""
            
            for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
                linha += "*"
            }
            
            console.log(linha)
            
            quantidadeAtual++
        }

        O resultado seria:
            *
            **
            ***
            ****
        P.S.: Essa eu errei
*/

/*****Exercícios de escrita de código******/

    //-----Atividade 1-----

        let numeroBichinho = Number(prompt("Quantos bichinhos de estimação você tem?"))

        let nomeBichinho = []

        if (numeroBichinho !== 0){

            console.log("Digite o nome deles um por um")

            for (let inserirNome = 0; inserirNome < numeroBichinho; inserirNome++){
            
                nomeBichinho [inserirNome] = prompt("Digite um nome:")

            }

            console.log(nomeBichinho)

        } else {

            console.log ("Que pena! Você pode adotar um pet!")
        
        }
    
    //-----Atividade 2-----

        let numeros = [15, 20, 390, 33, 51, 22, 10, 100]

        //a) Escreva um programa que imprime cada um dos valores do array original.

            function imprimir (array){
            
                for (let numero of array){

                    console.log (numero)
                }
            }

            imprimir(numeros)

        //b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

            function dividirPorDez (array){

                for (let divisao of array){

                    console.log (divisao/10)
                }
            }

            dividirPorDez(numeros)

        /*c) Escreva um programa que crie um novo array contendo, somente, os números pares
        do array original e imprima esse novo array*/

            function pares(array){

                let novoArrayPares = []
                const condicao = array.length

                for (let contador = 0; contador < condicao; contador++){

                    if (array[contador]%2 === 0){
                        
                        novoArrayPares.push(array[contador])
                    }
                }

                console.log(novoArrayPares)
            }

            pares(numeros)

        /*d) Escreva um programa que crie um novo array contendo strings, da seguinte forma:
        "O elemento do índex i é: numero". Depois, imprima este novo array.*/
        
            function frase (array){
             
                let frases = []
                const condicao = array.length

                for (let contador = 0; contador < condicao; contador++){

                    frases.push(`O elemento do índex ${contador} é: ${array[contador]}`)
                }

                console.log (frases)
            }

            frase(numeros)

        /*e) Escreva um programa que imprima no console o maior
        e o menor números contidos no array original*/

            function maiorMenor (array){

                let numeroParametro = array[0]
                
                let menorNumero = 0

                let maiorNumero = 0

                for (let numero of array){

                    if (numero <= numeroParametro){

                        menorNumero = numero
                        numeroParametro = numero
                    
                    }else if (numero > maiorNumero){

                        maiorNumero = numero
                    }
                }

                console.log (`O menor Número é ${menorNumero}`)
                console.log (`O maior Número é ${maiorNumero}`)
            }

            maiorMenor(numeros)

/*****Desafios*****/

    //Primeiro desafio 

        /* console.log("***Adivinhe o número que estou pensando***")

        const numeroPensado = Number(prompt("Jogador Nº 1 digite o número que você está pensando:"))

        console.log ("Vamos jogar!!!")

        let chutes = Number(prompt("Jogador Nº 2 qual foi o número?"))

        if (numeroPensado !== chutes){

            while (numeroPensado !== chutes){

                if (chutes < numeroPensado){

                    console.log(`O número chutado foi: ${chutes}`)
                    console.log("Você errou ele é MAIOR")

                }else{

                    console.log(`O número chutado foi: ${chutes}`)
                    console.log("Você errou ele é menor")
                }

                chutes = Number(prompt("Jogador Nº 2 qual foi o número?"))
            }

            console.log(`O número chutado foi: ${chutes}`)
            console.log("Oh loco meu! Você acertou")

        }else {

            console.log ("Você ler mentes... Acertou, Parabéns!!!")
        } */

    //Segundo Desafio

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        console.log("***Adivinhe o número que estou pensando***")

        const numeroPensado = getRandomInt(1, 100)

        console.log ("Vamos jogar!!!")

        let chutes = Number(prompt("Jogador, qual foi o número?"))

        if (numeroPensado !== chutes){

            while (numeroPensado !== chutes){

                if (chutes < numeroPensado){

                    console.log(`O número chutado foi: ${chutes}`)
                    console.log("Você errou ele é MAIOR")

                }else{

                    console.log(`O número chutado foi: ${chutes}`)
                    console.log("Você errou ele é menor")
                }

                chutes = Number(prompt("Jogador, qual foi o número?"))
            }

            console.log(`O número chutado foi: ${chutes}`)
            console.log("Oh loco meu! Você acertou")

        }else {

            console.log ("Você ler mentes... Acertou, Parabéns!!!")
        }

/*Para mim foi fácil, visto que já tinha a lógica pronta na hora de resolver*/