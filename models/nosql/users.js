import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String, select: false },
    role: { type: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export const usersModel = mongoose.model("users", UserSchema);

UserSchema.plugin(MongooseDelete, { overrideMethods: "all" });
