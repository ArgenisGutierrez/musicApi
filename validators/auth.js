import { check, validationResult } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

export const validatorRegisterItem = [
  check("name").exists().notEmpty().isString().isLength({ min: 3, max: 99 }),
  check("age").exists().notEmpty().isNumeric(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isString().isLength({ min: 5, max: 15 }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const validatorLogin = [
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
