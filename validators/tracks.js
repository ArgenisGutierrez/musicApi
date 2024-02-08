import { check } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

export const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];

export const validatorGetItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];

export const validatorUpdateItem = [
  check("id").exists().notEmpty().isMongoId(),
  check("name").optional(),
  check("album").optional(),
  check("cover").optional(),
  check("artist").optional(),
  check("artist.name").optional(),
  check("artist.nickname").optional(),
  check("artist.nationality").optional(),
  check("duration").optional(),
  check("duration.start").optional(),
  check("duration.end").optional(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];

export const validatorDeleteItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validateResult(req, res, next)
  }
];
