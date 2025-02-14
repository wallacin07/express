import { json } from 'body-parser';
import express, { Request, Response, Router } from 'express';
import Todo from '../models/todo';
import {v4 as uuidv4} from 'uuid';

const router: Router = express.Router();


router
    .post('/', async (req: Request, res: Response) => {
        const { description, completed } = req.body
        let myuuid = uuidv4();
        try {
            const TodoItem = new Todo({ description, completed})
            await TodoItem.save()
            res.status(201).json(TodoItem);
        } catch (error) {
            res.status(400).json(`Erro ao criar um item ${error}`);
        }
    })
    .get('/', async (req: Request, res: Response) => {
        try {
            const todos = await Todo.find()
            res.status(201).json(todos);
        } catch (error) {
            res.status(400).json("Erro ao puxar os itens");
        }
    })
    

export default router;
