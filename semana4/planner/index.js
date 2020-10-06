function criarTarefa(){
    let tarefaValor = document.getElementById("tarefa").value
    let diasSemana = document.getElementById("dias-semana").value

    let divdomingo = document.getElementById("domingo")
    let divsegunda = document.getElementById("segunda")
    let divterca = document.getElementById("terca")
    let divquarta = document.getElementById("quarta")
    let divquinta = document.getElementById("quinta")
    let divsexta = document.getElementById("sexta")
    let divsabado = document.getElementById("sabado")

    switch(diasSemana){
        case "domingo":
            divdomingo.append(tarefaValor)
            break
        case "segunda":
            divsegunda.append(tarefaValor)
            break
        case "terca":
            divterca.append(tarefaValor)
            break
        case "quarta":
            divquarta.append(tarefaValor)
            break
        case "quinta":
            divquinta.append(tarefaValor)
            break
        case "sexta":
            divsexta.append(tarefaValor)
            break
        case "sabado":
            divsabado.append(tarefaValor)
            break        
    }
    tarefaValor = ""
    return
}