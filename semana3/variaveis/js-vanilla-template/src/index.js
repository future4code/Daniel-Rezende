/*exercicios de interpretação:
1 - no primeiro caso será o valor 10 e no segundo, os valores 10 e 5 respectivamente

2 - será impresso o valor 10 3 vezes
*/

let nome;
let idade;
console.log(typeof idade) 
//aqui foi impresso um "undefined" devido a variavel "idade" não   ter valor definido
nome = prompt("digite seu nome")
idade = prompt("digite sua idade")
console.log(typeof nome)
console.log(typeof idade)
//o console retornou o tipo string para as 2 variaveis
console.log("ola " + nome + ", você tem " + idade + " anos de idade")

let gordura = prompt("qual sua gordura favorita?")
console.log("Resposta: " + gordura)
let carboidrato = prompt("qual seu carboidrato favorito?")
console.log("Resposta: " + carboidrato)
let proteina = prompt("qual sua proteina favorita?(vegetal ou animal)")
console.log("Resposta: " + proteina)
let melhoria = prompt("qual melhoria você gostaria de ter na sua saude?")
console.log("Resposta: " + melhoria)
let energia = prompt("qual seu nivel de energia em uma escala de 0 a 10?")
console.log("Resposta: " + energia)

let minhasComidasFavoritas = ['costela gorda', 'feijão gordo', 'queijo gordo', 'açaí grosso', 'caqui']
console.log(minhasComidasFavoritas)
console.log("Essas são minhas comidas preferidas:")
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[1])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])
let ComidasFavoritaUsuario = prompt("qual sua comida favorita?")
minhasComidasFavoritas[1] = ComidasFavoritaUsuario
console.log(minhasComidasFavoritas)

let perguntas = ['você está cansado(a) agora?', 'você tem medo de altura?', 'você gosta de chocolate amargo?']
let respostas = [false, true, true] 
console.log(perguntas[0] + " " +respostas[0])
console.log(perguntas[1] + " " +respostas[1])
console.log(perguntas[2] + " " +respostas[2])

