//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { error } from 'console';
//iniciando a aplicação web com express 
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]//  EXERCICIO 1
app.get('/usuarios', (req, res) =>{ 
    return res.send(users)
 })  //usando o metodo get peguei o array de usuario através do end point /usuarios

//  EXERCICIO 2
let comuns: String[] = []
let admins: String[] = []
users.map(user => user.type === 'NORMAL'?comuns.push(user.name): admins.push(user.name))

app.get('/usuarios/comuns', (req, res) =>{  
    return res.send(comuns)
})
app.get('/usuarios/administradores', (req, res) =>{    
    return res.send(admins)
})
 //não passei o type na requisição, peguei dando map nos array de usuarios e atribuindo a outros arrays conforme o caso
 //realmente não sei :(

 //   Exercicio 3

app.get('/usuarios/:nome', (req, res) =>{  
    let nome: String = req.params.nome   
    users.map(user => user.name === nome?res.send(user): null)
    return res.status(404).send('usuario não existe')
 })

 //   Exercicio 4
 app.post('/usuarios/',(req, res) => {
     let usuarioNovo: user = {id: users[users.length-1].id + 1, name: req.body.name, email: req.body.email, type: req.body.type, age: req.body.age }
     users.push(usuarioNovo)
     return res.send(users)
     //usando o metodo put, o resultado foi o mesmo do post, mas ainda assim não é o metodo mais adequado, pois oque queremos mesmo é adicionar um novo usuario e não mudar um ja existente
 })

 //   Exercicio 5
 app.put('/usuarios/', (req, res) =>{    
    let nome: string = req.body.nome
    users[users.length-1].name = '[ALTERADO] '+nome
    return res.send(users)
})

//  Exercicio 6
app.patch('/usuarios/', (req, res) =>{    
    let nome: string = req.body.nome
    users[users.length-1].name = '[REALTERADO] '+nome
    return res.send(users)
})
 
//  Exercicio 7
app.delete('/usuarios/:id', (req, res) =>{    
    let id: String = req.params.id
    users.splice(Number(id) - 1)
    return res.send(users)
})













const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Servidor rodando em: http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
