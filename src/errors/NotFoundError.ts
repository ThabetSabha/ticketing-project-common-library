import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = "route not found";
  constructor() {
    super("route not found");
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
