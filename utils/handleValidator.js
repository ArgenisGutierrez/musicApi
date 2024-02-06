import { validationResult } from "express-validator";

export const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //NOTE:Continua con el controlador.
  } catch (err) {
    res.status(403);
    res.json({ error: err.array() });
  }
}
