import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";
const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const storagesModel = mongoose.model("storages", StorageScheme);

StorageScheme.plugin(MongooseDelete, { overrideMethods: "all" });
