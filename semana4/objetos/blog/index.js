function coletarValores(){

let Titulo = document.getElementById("titulo-post").value
let Autor = document.getElementById("autor-post").value
let Conteudo = document.getElementById("conteudo-post").value

let dados = {Titulo:Titulo, Autor:Autor, Conteudo:Conteudo}
let Objetos = []
Objetos.push(dados)

Titulo = ""
Autor = ""
Conteudo = ""

let secao = document.getElementById("container-de-posts")
secao.append(dados.Titulo, dados.Autor, dados.Conteudo)
/n
console.log(secao)
}
