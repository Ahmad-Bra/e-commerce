import { Request, Response } from "express";
import { validationResult } from "express-validator";
// @ts-nocheck

export default class ErrorsValidation {
  public response: Response;
  public request: Request;
  constructor(request: Request, response: Response) {
    this.response = response;
    this.request = request;
  }
  public errorChecker() {
    const result = validationResult(this.request);
    if (!result.isEmpty()) {
      this.response.status(400).json({ errors: result.array() });
    }
  }
}
