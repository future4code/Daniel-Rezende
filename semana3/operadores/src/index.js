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

let idade = prompt("qual sua idade?")
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

//Desafios
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
console.log(xicaraParaLitro)
