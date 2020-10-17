//Interpretação de codigo
/*
    1 - cria uma função que pegará a cotação do dolar através do valor digitado pelo usuario e irá retornar o valor de uma quantia de dolar em reais, multiplicando o mesmo pela cotação.
    É passado 100 dolares como parâmetro e impresso no console o valor em reais(100 * contação).

    2 - cria uma função que irá calcular os ganhos do usuario multiplicando o valor investido pelo rendimento,pra isso o programa verifica o investimento e seu valor com switch case.
    É dado como exemplo os investimentos em ações e tesouro diréto,com valor de 150 e 200 respectivamente, sendo impresso o valor: 150*1.1 = 165 para ações e uma mensagem de investimento incorreto no segundo caso, já que tesouro diréto não está listado no switch.

    3 - cria 3 array,sendo 1 com varios valores e 2 vazios. Cria um laço for para percorrer todo o array, verifica se cada numero é par ou impar, caso seja par,ele será atribuido ao array1, caso seja impar,ao array 2. Será impresso respectivamente: mensagem + quantidade de numeros do primeiro array, quantidade de numeros do array1 e quantidade de numeros do array2.

    4 - cria 1 array e 2 variaveis, depois usa um laço for para percorrer todo array, faz verificação com if: se o numero(do array) for menor que o numero1 então numero1 será igual a esse valor(do array); caso numero seja maior que numero2, o numero 2 recebera esse valor. Em outras palavras: esse programa imprime no console o menor e o maior numero do array.
*/ 

//Exercicios lógica de programação

/*
    1 - Um array pode ser percorrido com for,while ou com o metodo foreach do proprio array.
    array = [2, 4, 7, 10, 15, 20]
    for: for(i=0;i<array.length;i++){}
    while:i = 0   while(i < array.length)   {i++}
    foreach: array.forEach(function(array){})

    2 - a)false     b)true      c)true      d)true      e)true

    3 - não funciona, é nescessário definir a quantidade de numeros pares e o acrescimo do 'i':
    
    const quantidadeDeNumerosPares = 5
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
        i++
    console.log(i*2)
} 
*/ 
//  4 -
    function tipoTriangula(a, b, c){
        let tipo
        if(a === b && a === c) {
            tipo = "equilátero"
        }
        else if ((a === b && a !== c) || (a === c && a !== b)
            ||   (b === c && b !== a)){
            tipo = "isósceles"
        }
        else{
            tipo = "escaleno"
        }
        return tipo
    }    
    console.log(tipoTriangula(100, 100, 100))

//  5 -
    let num1 = 32
    let num2 = 8
    if(num1 > num2){
        console.log("o maior é "+num1)
    }   
    else if(num1 < num2){
        console.log("o maior é "+num2)
    }
    else{
        console.log("os numeros são iguais")
    }
    if (num1 % num2 == 0){
        console.log(num1+" é divisivel por "+num2)
    }
    else{
        console.log(num1+" não é divisivel por "+num2)
    }
    if (num2 % num1 == 0){
        console.log(num2+" é divisivel por "+num1)
    }
    else{
        console.log(num2+" não é divisivel por "+num1)
    }
    console.log("a diferença entre eles é "+(num1 - num2))


//Exercícios de Funções
//  1 -    
    
    function indiceMaiorNumero(array1){
        let maiorNumero = 0
        let indiceMaiorNumero 
    for(contador = 0;contador <= array1.length;contador++){
        laco = array1[contador]
        if(laco > maiorNumero){
            maiorNumero = laco
            indiceMaiorNumero = contador
        }
    }
    return indiceMaiorNumero
    }
    
    function indiceMenorNumero(array1){
        let MenorNumero = 78
        let indiceMenorNumero 
    for(contador = 0;contador <= array1.length;contador++){
        laco = array1[contador]
        if(laco < MenorNumero){
        MenorNumero = laco
        indiceMenorNumero = contador
        }
    }
    return indiceMenorNumero
    }
    numerosArray = [22, 7, 45, 19, 78, 12, 63]
    numerosArray.splice(indiceMaiorNumero(numerosArray))
    console.log(indiceMaiorNumero(numerosArray) , indiceMenorNumero(numerosArray))

//Exercicios de Objetos
// 1 - arrays são variaveis que contem mais de um valor, objeto é tudo aquilo que tem caracteristicas(atributos) e metodos(ações). Usamos array para facilitar a escrita do codigo,ao inves de criar varias variaveis cria se apenas 1 contendo todos os valores desejados. Objetos são usados para aproximar o mundo real da programação, já que tudo em nossa volta é objeto

// 2 
    function criarRetangulo(lado1, lado2){
       let retangulo = {
            largura:lado1,
            altura:lado2,
            perimetro:2 * (lado1 + lado2),
            area: lado1 * lado2
        }
        return retangulo
    }
    console.log(criarRetangulo(10, 20))

    let filmeFavorito = {
        titulo:'24 horas',
        ano:"2001",
        diretor:"Stephen Hopkins",
        atores:['jack bauer', ' nina myers', ' kim bauer']
    }
    console.log("venha assistir ao filme "+filmeFavorito.titulo+", de ano "+filmeFavorito.ano+", dirigido por "+filmeFavorito.diretor+", e estrelado por "+ filmeFavorito.atores)

    pessoa = {
        nome:'daniel',
        idade:'19',
        email:'daniel@email.com',
        endereco:'brasil'
    }
    function anonimizarPessoa(){
        pessoa.nome = 'ANÔNIMO'
        
        return pessoa
    }

//Exercicio de funções de array

// 1 
pessoas = { nome: "Pedro", idade: 20 },
{ nome: "João", idade: 10 },
{ nome: "Paula", idade: 12 },
{ nome: "Artur", idade: 89 }

