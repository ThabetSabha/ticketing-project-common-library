import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(private errors: ValidationError[]) {
    super("request validation error");
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return {
        message: err.msg,
        field: err.param,
      };
    });
  }
}
