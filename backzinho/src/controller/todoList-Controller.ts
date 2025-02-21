import { json } from 'body-parser';
import express, { Request, Response, Router } from 'express';
import Todo from '../models/todo';
import {v4 as uuidv4} from 'uuid';


class todoListController{

    static postTodoItem = async (req: Request, res: Response) : Promise<any> =>
        {
            const { description, completed } = req.body
            try {
                const TodoItem = new Todo({ description, completed})
                await TodoItem.save()
                res.status(201).json(TodoItem);
            } catch (error) {
                res.status(400).json(`Erro ao criar um item ${error}`);
            }
        };
        
    static getTodoList = async (req: Request, res: Response) : Promise<any> =>
            {  
                try {
                    const todos = await Todo.find()
                    res.status(201).json(todos);
                } catch (error) {
                    res.status(400).json("Erro ao puxar os itens");
                }
            };

            static deleteTodoItem = async( req: Request, res: Response ) : Promise<any> => 
            {
                try{
                    const id : string = req.params['id']
                    await Todo.findByIdAndDelete(id);
                    res.status(200).json("deu boa");
                }catch(error){
                    res.status(400).json("Erro ao deletar");
                }
            }

            // static updateItem = async( req: Request, res: Response ) : Promise<any> => 
            //     {
            //         try{
            //             const id : string = req.params['id']
            //             await Todo.findByIdAndUpdate(id)
            //             res.status(200).json("deu boa");
            //         }catch(error){
            //             res.status(400).json("Erro ao deletar");
            //         }
    
            //     }


}

export default todoListController;
