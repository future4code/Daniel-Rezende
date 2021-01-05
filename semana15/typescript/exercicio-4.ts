type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//apenas corrigindo alguns erros. a transpilação está acontecendo automaticamente por uma extensão do vscode

//caso colocasse os arquivos dentro da pasta src, a propriedade rooDir teria que ser alterada para o caminho dessa pasta

//a transpilação de varios arquivos simultaneos pode ser feita através de um script no node executando o tsc em cada arquivo com um unico comando

