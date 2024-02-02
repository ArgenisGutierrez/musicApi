import { Router } from "express";
import { uploadMiddleware } from "../utils/handleStorage.js";
import { storageController } from "../controllers/storage.js";
export const storageRouter = Router();

storageRouter.post('/', uploadMiddleware.single("myfile"), storageController.createItem);
