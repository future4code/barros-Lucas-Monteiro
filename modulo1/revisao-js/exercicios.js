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

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
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