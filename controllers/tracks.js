import { tracksModel } from '../models/nosql/tracks.js'
export class TracksController {
  static async getItems(req, res) {
    const data = await tracksModel.find({});
    res.send({ data });
  };

  static async getItem(req, res) {

  };

  static async createItem(req, res) {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.send({ data });
  };

  static async updateItem(req, res) {

  };

  static async deleteItem(req, res) {

  };
}
