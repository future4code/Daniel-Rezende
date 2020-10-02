                            // PROJETO OPERADORES

// EXERCICIO DE INTERPRETAÇÃO

/*primeiro exercicio:
1 - a. false
2 - b. true
3 - c. false
4 - e. false

Segundo exercicio:
1 - a. undefined
2 - b. null
3 - c. 10
4 - d. undefined
5 - e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]   
6 - f. 9
*/
                                
//EXERCICIO DE ESCRITA

/*let idade = prompt("qual sua idade?")
let idadeAmigo = prompt("idade do seu melhor amigo(a)")
let idadeMaior = idade > idadeAmigo
console.log("sua idade é maior que a do seu melhor amigo? " + idadeMaior) 
console.log(idade - idadeAmigo)

let numeroPar = prompt("insira um numero par")
let resto = numeroPar%2
console.log(resto) //todos os numeros pares dão resto 0, ja que todos os pares são divisiveis por 2
//caso um numero impar seja inserido,com excessão do 1, o resto será sempre 1

let listaDeTarefas = []
listaDeTarefas.push(prompt("digite a primeira tarefa"))
listaDeTarefas.push(prompt("digite a segunda tarefa"))
listaDeTarefas.push(prompt("digite a terceira tarefa"))
console.log(listaDeTarefas)
listaDeTarefas.splice(prompt("digite o indice inicial da tarefa ja feita(0, 1, ou 2)"), prompt("digite o indice final da tarefa ja feita(0, 1, ou 2)"))
console.log(listaDeTarefas)

let nome = prompt("digite seu nome")
let email = prompt("digite seu e-mail")
console.log("O e-mail "+email+" foi cadastrado com sucesso!.Seja bem vindo(a), "+nome+"!")

//DESAFIO EXTRA
let fahrenheit = 77;
let celsius = [80, 30]
let fahrenheitToKelvin1 = (fahrenheit -32)*5/9 + 273.15;
let celsiusToFahrenheit1 = (celsius[0])*9/5 + 32;
let celsiusToFahrenheit2 = (celsius[1])*9/5 + 32;
let fahrenheitToKelvin2 = (celsiusToFahrenheit2 -32)*5/9 + 273.15;
console.log(fahrenheitToKelvin1 +"°K");
console.log(celsiusToFahrenheit1 +"°F");
console.log(celsiusToFahrenheit2+"°F");
console.log(fahrenheitToKelvin2+"°K")

let consumo = 280
let valorBruto = consumo * 0.05
let desconto = valorBruto * 15/100
let valorLiquido = valorBruto - desconto
console.log(valorBruto)
console.log(valorLiquido)

let libra = 20 
let libraParaKg = libra*0.453592
console.log(libraParaKg)
let onca = 10.5
let oncaParaKg = onca*0.0283495
console.log(oncaParaKg)
let milha = 100
let milhaParaMetro = milha*1609.34
console.log(milhaParaMetro)
let pes = prompt("digite o valor em pés")
let pesParaMetro = pes*0.3048
console.log(pesParaMetro)
let galao = 103.56
let galaoParaLitro = galao*3.78541
console.log(galaoParaLitro)
let xicara = 450
let xicaraParaLitro = xicara*0.24
console.log(xicaraParaLitro)*/


                            // PROJETO CONDICIONAIS

//EXERCICIO DE INTERPRETAÇÃO

// 1:
//O codigo primeiro cria 2 variaveis constantes, a primeira recebe um numero que o usuário digitar a segunda recebe esse mesmo valor mas em formato de numero ao invés de string.
//Em seguida criar uma condição para caso o numero digitado tiver resto 0 na divisão por 2(ser numero par), ele imprimirá a mensagem "passou no teste". Caso essa condição seja falsa(resto impar ou algo diferente de um numero) ele imprirá "não passou no teste". Basicamente ele verificar se um numero é par ou não.

// 2:
//Primeiro foi criado 2 variaveis: "fruta" e "preço", o valor da fruta será digitado pelo usuario, para assim ser impresso no console a fruta + seu preço.
//se o usuario escolher a maçã,será impresso: "O preço da fruta maçã é R$2,25" 
//se o break fosse retirada depois da pêra,o programa daria continuidade no processo de verificação pra todos os valores depois da pêra,mesmo o caso sendo considerado como verdadeiro.

// 3:
//É criado uma variavel constante que recebera o valor digitado pelo usuario,sendo este do tipo numero.
//Depois temos uma condição de se o numero for maior que 0, será impresso a mensagem "Esse número passou no teste" e criada a variavel "mensagem" contendo esta um texto.
//Caso fosse digitado um numero menor que 0(-10 por exemplo), a condição não seria satisfeita, e como tudo oque há depois é um console.log para mostrar a variavel mensagem,o programa dará erro,porque essa variavel não existe, já que ela só passaria a existir caso a condição fosse verdadeira.

// EXERCICIO DE ESCRITA 
/*
let idade = Number(prompt("digite sua idade"))
if(idade >= 18){
    console.log("você pode dirigir")
}
else{console.log("você não pode dirigir")}

let turno = prompt("em qual turno você estuda(M - matunino, V - vespertino ou N - noturno)")
if(turno == "M"){
    console.log("bom dia")
}
else if(turno == "V"){
    console.log("boa tarde")
}
else if(turno == "N"){
    console.log("boa noite")
}

switch(turno){
    case("M"):
    console.log("Bom dia")
    break
    case("V"):
    console.log("Boa tarde")
    break
    case("N"):
    console.log("Boa noite")
    break
}

let generoFilme = prompt("qual o genero do filme?")
let valorFilme = prompt("qual o valor do filme?")
let snack = prompt("qual snack vai levar para o filme?")
if(generoFilme == "fantasia" && valorFilme < "15"){
    console.log("Bom filme!... com "+snack)
}
else{
    console.log("Escolha outro filme :(")
}
//DESAFIO EXTRA
let nomeCompleto = prompt("digite seu nome completo")
let tipoDeJogo = prompt("tipo de jogo: IN(internacional) ou DO(domestico)")
let etapaDoJogo = prompt("etapa do jogo:SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
let categoria = prompt("categoria: pode ser as opções 1, 2, 3 ou 4;")
let quantidadeIngressos = prompt("quantos ingressos?")
let valorIngresso
if(etapaDoJogo == "SF" && categoria == "1"){
    valorIngresso = 1,320.00
}
else if(etapaDoJogo == "SF" && categoria == "2"){
    valorIngresso = 880.00
}
else if(etapaDoJogo == "Sf" && categoria == "3"){
    valorIngresso = 550.00
}
else if(etapaDoJogo == "Sf" && categoria == "4"){
    valorIngresso = 220.00
}
else if(etapaDoJogo == "DT" && categoria == "1"){
    valorIngresso = 660.00
}
else if(etapaDoJogo == "DT" && categoria == "2"){
    valorIngresso = 440.00
}
else if(etapaDoJogo == "DT" && categoria == "3"){
    valorIngresso = 330.00
}
else if(etapaDoJogo == "DT" && categoria == "4"){
    valorIngresso = 170.00
}
else if(etapaDoJogo == "FI" && categoria == "1"){
    valorIngresso = 1980.00
}
else if(etapaDoJogo == "FI" && categoria == "2"){
    valorIngresso = 1320.00
}
else if(etapaDoJogo == "FI" && categoria == "3"){
    valorIngresso = 880.00
}
else if(etapaDoJogo == "FI" && categoria == "4"){
    valorIngresso = 330.00
}
let valorTotalIngresso = valorIngresso * quantidadeIngressos
console.log("---Dados da compra---")
console.log("Nome do cliente: "+nomeCompleto)
if(tipoDeJogo == "IN"){
    console.log("tipo de jogo: Internacional")
}
else if(tipoDeJogo == "DO"){
    console.log("tipo de jogo: Nacional")
}
if(etapaDoJogo == "SF"){
    console.log("Etapa do jogo: Semifinais")
}
if(etapaDoJogo == "DT"){
    console.log("Etapa do jogo: Decisão do 3º lugar")
}
if(etapaDoJogo == "FI"){
    console.log("Etapa do jogo: Final")
}
console.log("Categoria: "+categoria)
console.log("Quantidade de ingressos: "+quantidadeIngressos)
console.log("---Valores---")
if(tipoDeJogo == "DO"){
    console.log("Valor do ingresso: R$ "+valorIngresso)
    console.log("Valor total: R$ "+valorTotalIngresso)
}
else if(tipoDeJogo == "IN"){
    console.log("Valor do ingresso: U$ "+ Number(valorIngresso) / 4.10)
    console.log("Valor total: U$ "+ Number(valorTotalIngresso) / 4.10)
}*/


                            //PROJETOS LOOPS

//EXERCICIO DE INTERPRETAÇÃO
// 1:
/* É criado a variavel valor e i, a primeira é atribuida o valor 0, a segunda é usada para receber o laço que passara do valor inicial 0 e recebera a soma com +1 enquanto ele for menor que 5.
A variavel valor será acrescida de seu valor + o valor tambem crescente da variavel i a cada laço enquanto menor que 5,portanto ao chegar no 4º laço a variavel valor será = 10, sendo este valor impresso no console.log 
 Nessa questão foi feito um laço usando for of para percorrer o array completo, depois é feito uma verificação se o numero é maior que 18, se sim,ele deve ser impresso no console.
 Caso quisesse acessar o indice de cada elemento,poderia botar: nomeDoArray[indice]; ou se quisesse acessar todos:nomeDoArray.lenght*/ 

//EXERCICIO DE ESCRITA

let arrayOriginal = [5, 4, 3, 2, 1, 6, 7, 8, 9, 10]
for(let contador1 of arrayOriginal){
    let arrayPirata = []
    console.log(contador1)
    console.log(contador1 / 10)
    if(contador1%2 == 0){
        arrayPirata.push(contador1)
        console.log(arrayPirata[contador1])
    }
}


let array1 = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30"]
for(contador2=0;contador2 < array1.length;contador2++){
    console.log("o elemento do índex "+ contador2 + " é " + array1[contador2] )
}

let maiorNumero = null
let menorNumero = arrayOriginal[0]
for(let i = 0;i < arrayOriginal.length;i++){
    if(arrayOriginal[i] > maiorNumero){
        maiorNumero = arrayOriginal[i]
    }
       else if(arrayOriginal[i] < menorNumero){
           menorNumero = arrayOriginal[i]
}
}    
console.log ("O maior número é "+maiorNumero+" e o menor é "+menorNumero)

    