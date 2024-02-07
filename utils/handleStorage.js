import multer from "multer";

// NOTE: Estas lineas solo crean el __dirname
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type funcion que permite almacenar un archivo en nuestro storeage */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  }
});

// NOTE: multer middleware
export const uploadMiddleware = multer({ storage });

