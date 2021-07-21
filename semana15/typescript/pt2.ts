function obterEstatisticas(numeros:number []) {

    const numerosOrdenados: Number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//encontrei apenas a tipagem number nessa função

type numeros = {
    numbers: [10, 3, 42, -5, 14]
}