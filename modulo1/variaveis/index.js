//*****Exercícios de interpretação de código*****

//-----Atividade 1-----

let a = 10 //Aqui está sendo criada a variável chamada "a" e inserindo 10 nessa variável 
let b = 10 //Aqui está sendo criada a variável chamada "b" e inserindo 10 nessa variável
//Vale lembrar que as duas variáveis são do tipo Number e quando se usa o let, podemos alterar a informação depois 

console.log(b) //Irá exibir no console o que tem na variável "b" (10)

b = 5 //Aqui estamos colocando uma nova informação na variável "b" (5)
console.log(a, b) //Irá exibir no console o que tem na variável "a" (10) e na "b" (5)

//-----Atividade 2-----

//Observação: Troquei os nomes das variáveis que estavam no exemplo para não dar conflito

let x = 10 //Aqui está sendo criada a variável chamada "x" e inserindo 10 nessa variável
let y = 20 //Aqui está sendo criada a variável chamada "y" e inserindo 20 nessa variável

z = x //Aqui a variável "z" está recebendo a informação da variável "x" (10)
//Fiquei na dúvida se podemos criar variáveis sem o comando let ou const
y = z //Aqui a variável "y" está recebendo a informação da variável "z" (10)
x = y //Aqui a variável "x" está recebendo a informação da variável "y" (10)

console.log(x, y, z) //Irá exibir no console o que tem na variável "x" (10) "y" (10) e "z" (10)
//Como fiquei na dúvida se podia declarar uma variável sem os comandos let ou const, verifiquei no console o que "z" mostrava


//-----Atividade 3-----

//Renomiei a variável "p" por "HoraPorDia"
let HoraPorDia = prompt("Quantas horas você trabalha por dia?") /* Aqui está criando uma variável chamada
"HoraPorDia" e  abro um prompt para o usuário digitar uma informação e carregar minha variável */
//Renomiei a variável "t" por "SalarioPorDia"
let SalarioPorDia = prompt("Quanto você recebe por dia?") /* Aqui está criando uma variável chamada
"SalárioPorDia" e  abro um prompt para o usuário digitar uma informação e carregar minha variável */
//Vale lembrar que elas por padrão irão ser variáveis do tipo String por usar o prompt

alert(`Voce recebe ${SalarioPorDia/HoraPorDia} por hora`)//Aqui fique na dúvida e abri o console e fui pesquisar no Google
/*O comando alert cria uma espécie de notificação onde nos mostra o quanto a pessoa recebe.
E que para isso dar certo foi usado o comando ${} onde fez a operação de divisão dos valores informados 
mesmo as variáves sendo do tipo string. Então eu entendi que ela tranformou naquele momento as variáveis em 
number e realizou a operação, mostrando o resultado na notificação*/

//*****Exercícios de escrita de código*****

//-----Atividade 1-----

let nome
let idade

console.log(typeof nome, typeof idade)
/*No console aparece underfined, pois como ainda não atribuimos nenhuma informação, o código não sabe nos informar
ainda qual é o tipo da variável*/

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)
//Agora mostra String, pois elas por padrão irão ser variáveis do tipo String por usar o prompt na hora de inserir informações

console.log("Olá", nome,", você tem" ,idade ,"anos")

//-----Atividade 2-----

let PrimeiraPergunta = "Você trabalha?"
let SegundaPergunta = "Você estuda?"
let TerceiraPergunta = "Você gosta de viajar?"

let PrimeiraResposta = prompt("Você trabalha?")
let SegundaResposta = prompt("Você estuda?")
let TerceiraResposta = prompt("Você gosta de viajar?")

console.log(PrimeiraPergunta, PrimeiraResposta)
console.log(SegundaPergunta, SegundaResposta)
console.log(TerceiraPergunta, TerceiraResposta)

//-----Atividade 3-----

let PrimeiroValor = 10
let SegundoValor = 25
let Troca 

// Aqui faremos uma lógica para trocar os valores 
Troca = PrimeiroValor
PrimeiroValor = SegundoValor
SegundoValor = Troca

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", PrimeiroValor) // O novo valor de a é 25
console.log("O novo valor de b é", SegundoValor) // O novo valor de b é 10

//-----Desafio-----

let PrimeiroNumero = prompt("Digite um número")
let Segundonumero = prompt ("Digite outro número")

let TransformarPriNum = Number(PrimeiroNumero)
let TransformarSegNum = Number(Segundonumero)

let soma = TransformarPriNum + TransformarSegNum
let multiplicacao = TransformarPriNum * TransformarSegNum

console.log("1. O primeiro número somado ao segundo número resulta em:" , soma)
console.log ("2. O primeiro número multiplicado pelo segundo número resulta em:" , multiplicacao)
