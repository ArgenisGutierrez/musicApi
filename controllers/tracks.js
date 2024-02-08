import { matchedData } from 'express-validator';
import { tracksModel } from '../models/nosql/tracks.js'
import { handleHttpError } from '../utils/handelError.js';

/**
 * 
 * @class
 * @classdesc controlador de los tracks
 */
export class TracksController {
  /**
   * Obtener todos los tracks de la BD
   * @param {any} req 
   * @param {any} res 
   */
  static async getItems(req, res) {
    try {
      const data = await tracksModel.find({});
      res.send({ data });

    } catch (error) {
      handleHttpError(res, 'Error al obtener los tracks.', 500)
    };
  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async getItem(req, res) {
    try {
      const body = matchedData(req);
      const { id } = body;
      const data = await tracksModel.findById(id);
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al obtener un track por id.', 403);
    }
  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async createItem(req, res) {
    try {
      // NOTE: matchDAta elimina los datos no solitados en la validacion para dar un req limpia
      const bodyclean = matchedData(req);
      // const { body } = req;
      const data = await tracksModel.create(bodyclean);
      res.send({ data });
    } catch {
      handleHttpError(res, 'Error al crear el track', 403)
    };
  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async updateItem(req, res) {
    try {
      const { id, ...body } = matchedData(req);
      const data = await tracksModel.findByIdAndUpdate(id, body);
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al actualizar el track', 403);
    };

  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async deleteItem(req, res) {
    try {
      req = matchedData(req);
      const { id } = req;
      const data = await tracksModel.delete({ _id: id });
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al borra el track', 403);
    };
  };
}
