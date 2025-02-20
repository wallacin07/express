import { Express } from 'express';
import express from 'express'
import todoList from './Todo-list'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/', todoList)
    }