import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { dbConnect } from './config/mongo.js';
import { tracksRouter } from './routes/tracks.js';
import { storageRouter } from './routes/storage.js';
const app = express();
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('storage'));
//Routes
app.use('/api/tracks', tracksRouter);
app.use('/api/storage', storageRouter);
//Server
const port = process.env.PORT ?? 0;
app.listen(port, () => {
  console.log(`Aplicacion lista en http://localhost:${port}`);
});
//Db Conexion
dbConnect();
