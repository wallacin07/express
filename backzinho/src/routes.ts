import { Express } from 'express';
import express from 'express'
import todoListController from './controller/todoList-Controller';
import todoList from './routes/todoList-Route';
import auth from './routes/auth'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/todoList', todoList)
    .use('/', auth)
    }