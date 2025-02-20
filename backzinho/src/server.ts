import express from 'express';
import initRoutes from './routes/routes'
import connectDB from './db';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

const app = express();
const port = 8080;

connectDB();
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

app.use(cors(options));

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
    });

    {}