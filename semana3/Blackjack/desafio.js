  cartasUsuario = [comprarCarta(), comprarCarta()]
  cartasComputador = [comprarCarta(), comprarCarta()]
  let listaCartasUsuario = []
  let resultadoUsuario = 0
  let listaCartasComputador = []
  let resultadoComputador = 0
  alert("Bem vindo ao jogo de Blackjack!")
  if(confirm("quer iniciar uma nova rodada?")){

    if(cartasUsuario[0].texto[0] && cartasUsuario[1].texto[0] === "A"){confirm("2 cartas A tiradas no usuario,jogue denovo!")}
    if(cartasComputador[0].texto[0] && cartasComputador[1].texto[0] === "A"){confirm("2 cartas A tiradas no computador,jogue denovo!")}

    if(confirm("Suas cartas são "+cartasUsuario[0].texto+cartasUsuario[1].texto+". A carta revelada do computador é "+cartasComputador[1].texto+". Deseja comprar mais uma carta?")&& resultadoUsuario <= 21){
      cartasUsuario.push(comprarCarta())
      cartasComputador.push(comprarCarta())
    }

    for(i = 0;i < cartasUsuario.length;i++){
      resultadoUsuario += cartasUsuario[i].valor
      listaCartasUsuario += cartasUsuario[i].texto
      }
    for(i = 0;i < cartasComputador.length;i++){
        resultadoComputador += cartasComputador[i].valor
        listaCartasComputador += cartasComputador[i].texto
        }

      console.log("Usuário - cartas: "+ listaCartasUsuario + " - pontuação "+ resultadoUsuario)
    console.log("Computador - cartas: "+ listaCartasComputador + " - pontuação "+ resultadoComputador)

if( resultadoUsuario > 21 && resultadoComputador > 21){
    alert("empate")
    console.log("Empate!")
 }
else if(resultadoUsuario > resultadoComputador && resultadoUsuario <= 21){
    alert("suas cartas são "+listaCartasUsuario+" . sua pontuação é "+resultadoUsuario+". \n"+"As cartas do computador são"+listaCartasComputador+". \n"+"o Usuario venceu!")
    console.log("O usuário ganhou!")
 }
else if(resultadoUsuario < resultadoComputador && resultadoComputador <= 21){
  alert("suas cartas são "+listaCartasUsuario+" . sua pontuação é "+resultadoUsuario+". \n"+"As cartas do computador são"+listaCartasComputador+". \n"+"o computador venceu!")
  console.log("O computador ganhou!")
 }
  }
  else{console.log("O jogo acabou!")}