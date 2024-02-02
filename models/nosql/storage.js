import mongoose from "mongoose";
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
