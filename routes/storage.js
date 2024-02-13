import { Router } from "express";
import { uploadMiddleware } from "../utils/handleStorage.js";
import { storageController } from "../controllers/storage.js";
export const storageRouter = Router();

storageRouter.get('/', storageController.getItems);
storageRouter.post('/', uploadMiddleware.single("myfile"), storageController.createItem);

storageRouter.get('/:id', storageController.getItem);
// storageRouter.patch('/:id', storageController.updateItem);
storageRouter.delete('/:id', storageController.deleteItem);
