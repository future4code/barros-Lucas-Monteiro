// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
    //Acho que esse é o jeito mais fácil de retornar um tamnho de array
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    //Uma array nova para armazenar os valores invertidos 
    let arrayInvertido = []

    /*Para poder salvar uma array invertida, eu preciso rodar uma laço, 
    com o index de trás para vrente e salvando os valores na nova array.
    Não somo e sim subtraio*/
    for (let index = array.length; index-1 >= 0; index--){

        //Vou salvando os valores, o index tem que ser -1, pois se conta o zero
        arrayInvertido.push(array[index-1])
    
    }

    return arrayInvertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    //Array só para os número pares
    let arrayPar = []

    //Tenho que criar um laço, e ir testando pelo if se o número é par
    for (par of array){

        //Se o resto da divisão for igual a 0, o número é par
        if (par % 2 === 0) {

            //Então eu armazeno
            arrayPar.push(par)

        }

    }

    return arrayPar
  
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    //Array só para os número pares que será elevados
    let arrayParElevado = []

    //Tenho que criar um laço, e ir testando pelo if se o número é par
    for (par of array){

        //Se o resto da divisão for igual a 0, o número é par
        if (par % 2 === 0) {

            //Então eu armazeno o número elevado a 2.
            arrayParElevado.push(par*par)

        }

    }

    return arrayParElevado


}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    //Variável para armazenar o maior número
    let maiorNumero = 0

    //um laço para andar pela Array
    for (maior of array){

        /*Se o número da posição do array for maior que o número
        armazenado na variável*/
        if (maior > maiorNumero){
            //Eu armazeno o número
            maiorNumero = maior

        }

    }
  
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    //Criar o objeto, já para deixar pronto
    let numeros = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }

    //Faço um if para ver se o número 1 é maior que o 2 se for
    if (num1>num2){

        //Armazeno o número 1 no atributo de mairo número
        numeros.maiorNumero = num1
        //Faço a diferença entre eles
        numeros.diferenca = num1-num2
        
        //E vejo se ele é divisível pelo outro  
        if (num1%num2 === 0){

            //Se for, digo que é
            numeros.maiorDivisivelPorMenor = true
        }else{

            //Se não armazeno false
            numeros.maiorDivisivelPorMenor = false
        }        

    }else{ //Caso o núemro dois seja maior

        /*Armazeno o número 2 no atributo de mairo número
        E faço tada a lógica que fiz com o número 1 só 
        que substituindo por 2*/
        numeros.maiorNumero = num2
        numeros.diferenca = num2-num1

        if (num2%num1 === 0){

            numeros.maiorDivisivelPorMenor = true
        }else{

            numeros.maiorDivisivelPorMenor = false
        }
    }

    return numeros

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    //Crio uma array para armazenar os números pares
    let arrayPares = []
    //Uma variável para realizar a minha condição de loop
    let condicao = 0

    while (condicao < n) {

        /*Vou colocando no array o número*2 para ir listando os pares
        pela quantidade que foi digitada*/
        arrayPares.push(condicao*2)
        
        //Para não ficar no loop eterno
        condicao++
    }

    return arrayPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}