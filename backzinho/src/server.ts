import express from 'express';
import initRoutes from './routes'
import connectDB from './db';
import cors from 'cors';

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
const port = 8080;
app.use(cors(options));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
    });

connectDB();
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));


    