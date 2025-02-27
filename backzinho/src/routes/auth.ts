import express from 'express'
import AuthController from '../controller/AuthController';
import userMiddleware from '../middleware/UserMiddleware';


const route = express.Router();

route.post('/register', userMiddleware.ValidateRegister, AuthController.register)
route.post('/login', userMiddleware.ValidateLogin, AuthController.login)

export default route;