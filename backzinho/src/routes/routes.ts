import { Express } from 'express';
import express from 'express'
import person from './person'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/', person)
    }