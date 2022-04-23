// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

    const altura = Number(prompt("Digite a altura do retângulo:"))
    const largura = Number(prompt("Digite a largura do retângulo:"))

    console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

    const anoAtual = Number(prompt("Digite o ano atual:"))
    const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"))

    console.log(anoAtual-anoNascimento)  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

    const nome = prompt("Digite seu nome:")
    const idade = Number(prompt("Digite sua idade:"))
    const email = prompt("Digite seu e-mail:")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

    const cores = []

    cores[0] = prompt ("Qual a sua 1º cor favorita?")
    cores[1] = prompt ("Qual a sua 2º cor favorita?")
    cores[2] = prompt ("Qual a sua 3º cor favorita?")

    console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

    return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

    return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

    const tamanho1 = string1.length
    const tamanho2 = string2.length

    return tamanho1 === tamanho2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

    return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

    const tamanhoArray = array.length
    
    return array[tamanhoArray-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

    let tamanhoArray2 = array.length
    let troca1 = array [0]
    let troca2 = array [tamanhoArray2-1]
  
    array [tamanhoArray2-1] = troca1
    array [0] = troca2

    return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

    return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

    let anoAtual = Number(prompt("Digite o ano atual:"))
    let anoNascimento = Number(prompt("Digite seu ano de nascimento:"))
    let anoEmissao = Number(prompt("Digite o ano de emissão do RG:"))

    let idade = anoAtual - anoNascimento
    let renovacao = anoAtual - anoEmissao

    let jovem = idade <= 20 && renovacao >= 5
    let adulto = idade >= 21 && renovacao >= 10 && idade <= 50
    let coroa = idade >= 51 && renovacao >= 15

    console.log(jovem || adulto || coroa)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

    let maiorDeIdade = prompt("Você tem mais de 18 anos?")
    let medioCompleto = prompt ("Você possui ensino médio completo?")
    let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")

    console.log( maiorDeIdade === "sim" && medioCompleto === "sim" && disponibilidade === "sim")

}