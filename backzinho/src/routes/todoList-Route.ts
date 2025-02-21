import express from "express"
import todoListController from "../controller/todoList-Controller";


const route = express.Router();

route.get('/', todoListController.getTodoList)
route.post('/', todoListController.postTodoItem)
route.delete('/', todoListController.deleteTodoItem)


export default route;