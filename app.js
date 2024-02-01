import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { dbConnect } from './config/mongo.js';
import { router } from './routes/tracks.js';

const app = express();
//Middlewares
app.use(cors());
//Routes
app.use('/api', router);
//Server
const port = process.env.PORT ?? 0;
app.listen(port, () => {
  console.log(`Aplicacion lista en http://localhost:${port}`);
});
//Db Conexion
dbConnect();
