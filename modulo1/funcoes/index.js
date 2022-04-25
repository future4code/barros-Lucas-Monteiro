/*****Exercícios de interpretação de código*****/

    //Atividade 1

        function minhaFuncao(variavel) { // Aqui está sendo a função com um parâmetro
            return variavel * 5 //A função irá retornar o valor do parâmetro multiplicado por 5
        }
    
        console.log(minhaFuncao(2)) //Aqui estamos chamando a função e colocando 2 como parâmetro
        //Apareceré no console o número 10

        console.log(minhaFuncao(10)) //Aqui estamos chamando a função e colocando 10 como parâmetro
        //Apareceré no console o número 50

        /* O que aconteceria se retirasse os dois console.log e simplesmente invocasse 
        a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
        Resposta: A função seria executada, porém não iria mostrar nada no console*/

    //Atividade 2

        //Aqui está sendo declarada uma variável, que será preenchida com o que o usuário digitar
        let textoDoUsuario = prompt("Insira um texto");

        //Está se declarando uma função com um parâmetro 
        const outraFuncao = function(texto) { 
            /*Esta função retornará o seguinte. 
            Primeiro, irá deixar o texto digitado em minúsculo
            Depois irá procurar o elemento "cenoura" no texto e nos retornar true ou false*/
            return texto.toLowerCase().includes("cenoura")
        }
    
        //A variável irá armazenar o retorno da função
        const resposta = outraFuncao(textoDoUsuario)
        //Irá nos mostrar no console o resultado obtido
        console.log(resposta)

        /*Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        i.   Eu gosto de cenoura => Irá ser True
        ii.  CENOURA é bom pra vista => Irá ser True
        iii. Cenouras crescem na terra => Irá ser True */

/*Exercícios de escrita de código*/

    //Atividade 1

        // Letra a

            function sobreMim() {
                console.log("Eu sou Lucas, tenho 26 anos, moro em Jaboatão dos Guararapes e sou estudante.")
            }

            sobreMim()

        //letra b  

            function sobreOutro(nome, idade, cidade, profissao){
                return console.log("Eu sou", nome , ", tenho", idade ,"anos, moro em",cidade,"e sou ",profissao,".")
            }

            sobreOutro("Ana", 24, "Recife", "Tec. Enfermagem")

    //Atividade 2

            let retorno
            let numero = Number(prompt("Digite um número:"))
            let numero2 = Number(prompt("Digite outo número:"))

        /*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
        faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/

            function soma (num1, num2){
                return num1 + num2
            }  

            console.log("A soma dos dois número são?")
            console.log(soma(numero,numero2))

        /*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é
        **maior ou igual** ao segundo.*/

            function maiorOuIgual (num1, num2){
                return num1 >= num2
            }

            retorno = maiorOuIgual(numero,numero2)

            console.log("O",numero," é maior ou igual ao ",numero2,"?")
            console.log(retorno)

        /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/

            function par(num){
                let resto
                resto = num%2
                return resto===0
            }

            retorno = par(numero)

            console.log("O ",numero," é par?")
            console.log(retorno)

        /*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa
        mensagem, juntamente com uma versão dela em letras maiúsculas. */

            let texto = prompt("Digite um texto")

            function mensagem (text){
                console.log(text.toUpperCase())
                console.log(text.length) 
            }

            mensagem(texto)

    //Atividade 3

            numero = Number(prompt("Digite um número:"))
            numero2 = Number(prompt("Digite outo número:"))

            function soma2 (num1, num2){
                console.log("A soma é:", num1 + num2)
            }

            function subtracao (num1, num2){
                console.log("A diferença é:", num1 - num2)
            }

            function multiplicacao (num1, num2){
                console.log("A multiplicação é:",num1 * num2)
            }

            function divisao (num1, num2){
                console.log("A divisão é:", num1 / num2)
            }

            soma2(numero, numero2)
            subtracao(numero, numero2)
            multiplicacao(numero,numero2)
            divisao(numero,numero2)