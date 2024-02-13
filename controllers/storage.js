import { matchedData } from 'express-validator';
import { storagesModel } from '../models/nosql/storage.js';
import { unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { handleHttpError } from '../utils/handelError.js';
export class storageController {
  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async getItems(req, res) {
    try {
      const data = await storagesModel.find({});
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al Obtener los Items.', 403);
    };
  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async getItem(req, res) {
    try {
      const { id } = matchedData(req);
      const data = await storagesModel.findOne(id);
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al obtener el Item.', 403);
    };
  };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async createItem(req, res) {
    try {
      // NOTE: con file optienes los datos del archivo img en este caso
      const { file } = req;
      const fileData = {
        url: `${process.env.PUBLIC_URL}/${file.filename}`,
        filename: file.filename,
      };
      const data = await storagesModel.create(fileData);
      res.send({ data });
    } catch (error) {
      handleHttpError(res, 'Error al crear el Item.', 403);
    };
  };

  // static async updateItem(req, res) {
  // };

  /**
   * @param {any} req 
   * @param {any} res 
   */
  static async deleteItem(req, res) {
    try {
      const __dirname = path.dirname(fileURLToPath(import.meta.url));
      const { id } = matchedData(req);
      const data = storagesModel.findByIdAndDelete({ _id: id });
      unlinkSync(`${__dirname}../storage/${data.filename}`);
      res.send({ findMedia: data.filename, deleted: true, });
    } catch (error) {
      handleHttpError(res, 'Error al Eliminar el Item.', 403);
    };
  };
};
