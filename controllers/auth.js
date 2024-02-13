import { matchedData } from 'express-validator';
import { encrypt, compare } from '../utils/handlePassword.js';
import { usersModel } from '../models/nosql/users.js';
import { tokenSign } from '../utils/handleJwt.js';
import { handleHttpError } from '../utils/handelError.js';
/**
 * @class
 * @classdesc Autentificacion de ususarios
 */
export class Auth {
  /**
   * Metodo para registrar usuarios y generar su Json Web Token.
   * @param {any} req Request
   * @param {any} res Response
   */
  static async registerControl(req, res) {
    try {
      req = matchedData(req);
      const password = await encrypt(req.password);
      const body = { ...req, password };
      const dataUser = await usersModel.create(body);
      // NOTE:Este seteado filtra el password para que no sea mostrado
      dataUser.set('password', undefined, { strict: false });
      const data = {
        token: tokenSign(dataUser),
        user: dataUser
      };
      res.send({ data });
    } catch (e) {
      handleHttpError(res, 'Error al registrar al usuario', 403);
    };
  };

  /**
   * Metodo de loguear al ususario
   * @param {any} req Reques
   * @param {any} res Response
   */
  static async loginControl(req, res) {
    try {
      req = matchedData(req);
      const user = await usersModel.findOne({ email: req.email }).select('password name role email');
      if (!user) { handleHttpError(res, "Usuarion No Existe.", 404) };

      const hashPassword = user.get('password');
      const check = await compare(req.password, hashPassword);
      if (!check) {
        handleHttpError(res, "Password incorrecto", 401);
      };
      user.set('password', undefined, { strict: false });
      const data = {
        token: await tokenSign(user),
        user: user,
      };
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al Loguer.', 403);
    };
  }
}
