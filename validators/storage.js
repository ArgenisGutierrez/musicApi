import { check } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

export const validatorCreateStorage = [
  check("url").exists().notEmpty().isString(),
  check("filename").exists().notEmpty().isString(),
  (req, res, next) => {
    return validateResult(req, res, next);
  }
];

export const validatorId = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];
