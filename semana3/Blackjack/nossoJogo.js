/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack")
if(confirm("vamos começar o jogo?")){
   let carta = comprarCarta();
   let resultadoUsuario = carta.valor * 2
   console.log("usuario - cartas: "+carta.texto +" "+ carta.texto+" - pontuação: "+resultadoUsuario) 
   carta = comprarCarta();

   let resultadoComputador = carta.valor * 2
   console.log("Computador - cartas: "+carta.texto +" "+ carta.texto+" - pontuação: "+resultadoComputador)
   if(resultadoUsuario == resultadoComputador){
      console.log("Empate!")
   }
  else if(resultadoUsuario > resultadoComputador){
      console.log("O usuário ganhou!")
   }
  else if(resultadoUsuario < resultadoComputador){
      console.log("O computador ganhou!")
   }
   
}
else{console.log("O jogo acabou")}


