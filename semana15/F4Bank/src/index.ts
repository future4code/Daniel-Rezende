import express from 'express'
import cors from 'cors';
import { error } from 'console';

const server = express()

server.use(express.json());
server.use(cors());



type conta = {
    idade: number
    nome: String 
    cpf: String
    dataNascimento: String
    saldo: number 
    
}

type extrato = {
    valor: number,
    data: String,
    descricao: String
}

let transacoes: extrato[] =  []


let usuarios: conta[] = []


server.get('/users/', (req, res) => {
    res.send(usuarios)
})

server.post('/users/', (req, res) => {
    let novoUsuario: conta = {idade: req.body.idade, nome: req.body.nome, cpf: req.body.cpf, dataNascimento: req.body.dataNascimento, saldo:0}  
    let cpfIgual: boolean = false
     usuarios.map(usuario => novoUsuario.cpf === usuario.cpf? cpfIgual = true: null)
        
        if(novoUsuario.idade >= 18 && cpfIgual == false){
            usuarios.push(novoUsuario)
            res.send('conta criada com sucesso')
        }
        else{res.status(404).send('menor de 18 anos ou esse cpf já existe!')}
})

let data = new Date()
let dataAtual = data.toLocaleDateString()



server.get('/users/saldo', (req, res) => {
    let nome: string = req.query.nome as string
    let cpf:  string = req.query.cpf as string    

    let selecionado: number = usuarios.findIndex((usuario, index, array) => usuario.nome === nome && usuario.cpf === cpf)

   res.send('seu saldo é '+ usuarios[selecionado].saldo)
})



server.put('/users/adicionarSaldo', (req, res) => {
    let nome: string = req.body.nome
    let cpf: string = req.body.cpf 
    let valor: number =  req.body.valor

    let selecionado: number = usuarios.findIndex((usuario, index, array) => usuario.nome === nome && usuario.cpf === cpf)
    
    usuarios[selecionado].saldo += valor

    res.send('deposito concluido!, seu saldo é: '+ usuarios[selecionado].saldo )
})



server.post('/pagar', (req, res) => {
    let nome: string = req.query.nome as string
    let cpf:  string = req.query.cpf as string

    let selecionado: number = usuarios.findIndex((usuario, index, array) => usuario.nome === nome && usuario.cpf === cpf)

    let valor: number = req.body.valor
    let descricao: string  = req.body.descricao
    let data: string = req.body.data
    
    let dadosTransacoes:extrato = {valor, descricao, data}

    usuarios[selecionado].saldo < valor? res.status(404).send('saldo insulficiente!'):(
        usuarios[selecionado].saldo -= valor,
        
        transacoes.push(dadosTransacoes),
        res.json(dadosTransacoes),
        console.log(transacoes)
    ) 
})



server.post('/transferencia', (req, res) => {
    let nome: string = req.query.nome as string
    let cpf:  string = req.query.cpf as string

    let selecionado: number = usuarios.findIndex((usuario, index, array) => usuario.nome === nome && usuario.cpf === cpf)

    let nomeDestinatario: string = req.body.nome
    let cpfDestinatario: string  = req.body.cpf
    let valor: number = req.body.valor
    let descricao: string = req.body.descricao
    let data: string = req.body.data

    let dadosTransacoes:extrato = {valor, descricao, data}

    let destinatario: number = usuarios.findIndex((usuario, index, array) => usuario.nome === nomeDestinatario && usuario.cpf === cpfDestinatario)

    usuarios[selecionado].saldo < valor? res.status(404).send('saldo insulficiente!'):(
        transacoes.push(dadosTransacoes),
        usuarios[selecionado].saldo -= valor,
        usuarios[destinatario].saldo += valor,
        res.json({'nome do destinatario': nomeDestinatario, 'cpf do destinatario': cpfDestinatario, quantia:valor}),
        console.log(transacoes)
    )
    

})





server.listen('3000', () => {console.log('servidor rodando!')})