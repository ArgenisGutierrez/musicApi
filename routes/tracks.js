import { Router } from 'express';
import { TracksController } from '../controllers/tracks.js';
import { validatorCreateItem, validatorDeleteItem, validatorGetItem, validatorUpdateItem } from '../validators/tracks.js';
// import { customHeader } from '../middlewares/customHeader.js';
export const tracksRouter = Router();

/**
 * Listar todos los tracks
 */
tracksRouter.get('/', TracksController.getItems);
/**
 * Crear un track
 */
tracksRouter.post('/', validatorCreateItem, TracksController.createItem);

/**
 * Listar un track especificio 
 */
tracksRouter.get('/:id', validatorGetItem, TracksController.getItem);

/**
 * Actualizar los datos de un track 
 */
tracksRouter.patch('/:id', validatorUpdateItem, TracksController.updateItem);

/**
 * Eliminar un track
 */
tracksRouter.delete('/:id', validatorDeleteItem, TracksController.deleteItem);
