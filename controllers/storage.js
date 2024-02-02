import { storagesModel } from '../models/nosql/storage.js';
export class storageController {
  static async getItems(req, res) {
    const data = await storagesModel.find({});
    res.send({ data });
  };

  static async getItem(req, res) {

  };

  static async createItem(req, res) {
    // NOTE: con file optienes los datos del archivo img en este caso
    const { file } = req;
    const fileData = {
      url: `${process.env.PUBLIC_URL}/${file.filename}`,
      filename: file.filename,
    };
    const data = await storagesModel.create(fileData);
    res.send({ data });
  };

  static async updateItem(req, res) {

  };

  static async deleteItem(req, res) {

  };
};
