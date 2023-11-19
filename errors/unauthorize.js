import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class unauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export default unauthorizedError;
