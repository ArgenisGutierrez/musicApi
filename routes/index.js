// import expres from 'express';
// import { readdirSync } from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// export const routerIndex = expres.Router();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const PATH_ROUTES = __dirname;

// const removeExtension = (filename) => {
//   return filename.split('.').shift();

// }

// readdirSync(PATH_ROUTES).filter((file) => {
//   const name = removeExtension(file);
//   import router from `./${file}`;
//   if (name != 'index') {
//     routerIndex.use(`/${name}`, router);
//   };
// });
