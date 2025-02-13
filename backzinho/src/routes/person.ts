import { json } from 'body-parser';
import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: pessoa[] = [];
let countId = 0;

router
    .post('/usuario', (req: Request, res: Response) => {
        const { nome, idade } = req.body
        const person  = new pessoa(countId,nome,idade)
        people.push(person)
        countId += 1
        res.status(200).send(`Adicionado com sucesso`);
    })
    .get('/usuario', (req: Request, res: Response) => {
        res.status(200).send(people);
    })
    .get('/usuario/:id', (req: Request, res: Response) => {
        const { id} = req.params
        const Person = people.find((x) => x.id === Number.parseInt(id))
        res.status(200).send(` ${JSON.stringify(Person)}`);
    })
    .patch('/usuario/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { nome, idade } = req.body
        const Person = people.find((x) => x.id === Number.parseInt(id))
        if (nome != null) {
            Person && (Person.nome = nome)
        } 
        if (idade != null) {
            Person && (Person.idade = idade)
        }
        const indexParaExcluir = people.findIndex(pessoa => pessoa.id === Number.parseInt(id));
        people.splice(indexParaExcluir, 1);

        if (Person) 
            people.push(Person)
        

        res.status(200).send(`atualizado`);
    })
    .put('/usuario/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const { nome, idade } = req.body
        const Person = people.find((x) => x.id === Number.parseInt(id))

        Person && (Person.id = countId)
        Person && (Person.nome = nome)
        Person && (Person.idade = idade)

        if (Person) 
            people.push(Person)

        countId += 1
        res.status(200).send(`atualizado tudo`);
    })
    .delete('/usuario/:id', (req: Request, res: Response) => {
        const { id } = req.params
        const indexParaExcluir = people.findIndex(pessoa => pessoa.id === Number.parseInt(id));
        people.splice(indexParaExcluir, 1);
        res.status(200).send(`Deletado`);
    })

export default router;


class pessoa{

    id: number
    nome: string | undefined;
    idade : number 

    public constructor(id:number, nome: string, idade: number){
        this.id = id
        this.nome = nome
        this.idade = idade
    }

}