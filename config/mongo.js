import mongoose from "mongoose";

export const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(
      () => { console.log("Conexion exitosa.") },
      err => { console.log(err) }
    );

};
