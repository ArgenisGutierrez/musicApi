/**
 * @module Router de autentificacion.
 */
import { Router } from 'express';
import { validatorRegisterItem, validatorLogin } from '../validators/auth.js'
import { Auth } from '../controllers/auth.js';
export const authRouter = Router();
/**
 * Crear usuarios
 */
authRouter.post('/register', validatorRegisterItem, Auth.registerControl);

authRouter.post('/login', validatorLogin, Auth.loginControl);
