import { Router } from 'express';
import { TracksController } from '../controllers/tracks.js';
import { validatorCreateItem } from '../validators/tracks.js';
export const tracksRouter = Router();

tracksRouter.get('/', TracksController.getItems);
tracksRouter.post('/', validatorCreateItem, TracksController.createItem);

tracksRouter.get('/:id', TracksController.getItem);
tracksRouter.patch('/:id', TracksController.updateItem);
tracksRouter.delete('/:id', TracksController.deleteItem);
