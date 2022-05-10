//Resposta da atividade

console.log("Boas vindas ao jogo de Blackjack")

console.log("***Vamos começar***")

//Criei um objeto com as informações nescessárias do jogador para o jogo
const jogador = {
   
   //Atributos
   nomeUsuario : prompt ("Digite o nome do Jogador"), //Nome do jogador
   primeiraCarta : comprarCarta(), //sortear a 1º carta
   segundaCarta : comprarCarta(), //Sortear a 2º carta

   //métodos
   //Informações das cartas sorteadas
   //exemplo: Usuário - cartas: Q♣️ 10♣️  - pontuação 20
   mostrarCartas : (carta1, carta2, nome) => `${nome} - Cartas: ${carta1.texto} ${carta2.texto} - Pontuação: ${carta1.valor+carta2.valor}`,
   //somando os valores das cartas
}

const computador = {
            
   //Pego os atributos e métodos do jogador e repito para o computador
   ... jogador,

   //Só preciso mudar o nome e sortear novas cartas
   nomeUsuario : "Computador",
   primeiraCarta : comprarCarta(),
   segundaCarta : comprarCarta(),
}

//Guardar as somas
let pontosJogador = jogador.primeiraCarta.valor + jogador.segundaCarta.valor
let pontosComputador = computador.primeiraCarta.valor + computador.segundaCarta.valor

//Imprimo as inforomações das cartas
console.log(jogador.mostrarCartas(jogador.primeiraCarta, jogador.segundaCarta, jogador.nomeUsuario,))
console.log(computador.mostrarCartas(computador.primeiraCarta, computador.segundaCarta, computador.nomeUsuario,))

//Usar o if para ver quam ganhou ou se deu empate
if (pontosJogador > pontosComputador){
   console.log(`${jogador.nomeUsuario} ganhou a partida!!!`)
} else if (pontosJogador < pontosComputador){
   console.log(`${computador.nomeUsuario} ganhou a partida!!!`)
}else{
   console.log("Houve um empate nesta partida")
}

//Será minha variável para condição 
let continuar = true

while (continuar === true){      

   //Pergunto se quer uma nova rodada
   if(confirm("Quer iniciar uma nova rodada?")) {
   
      //Reinicia uma nova rodada

      console.log("  ")
      console.log("***Então, vamos para outra partida***")

      //Sorteio novas cartas para o jogador
      jogador.primeiraCarta = comprarCarta()
      jogador.segundaCarta = comprarCarta()

      //Sorteio novas cartas para o computador
      computador.primeiraCarta = comprarCarta()
      computador.segundaCarta = comprarCarta()

      //Guardar as novas somas
      pontosJogador = jogador.primeiraCarta.valor + jogador.segundaCarta.valor
      pontosComputador = computador.primeiraCarta.valor + computador.segundaCarta.valor

      //Imprimo as inforomações das cartas
      console.log(jogador.mostrarCartas(jogador.primeiraCarta, jogador.segundaCarta, jogador.nomeUsuario,))
      console.log(computador.mostrarCartas(computador.primeiraCarta, computador.segundaCarta, computador.nomeUsuario,))

      //Usar o if para ver quam ganhou ou se deu empate
      if (pontosJogador > pontosComputador){
         console.log(`${jogador.nomeUsuario} ganhou a partida!!!`)
      } else if (pontosJogador < pontosComputador){
         console.log(`${computador.nomeUsuario} ganhou a partida!!!`)
      }else{
         console.log("Houve um empate nesta partida")
      }

   } else {

      //Caso não queira, informa que o jogo acabou
      console.log("  ")
      console.log("***O jogo acabou!***") 
            
      //Interrompe a repetição
      continuar = false     

   }
}