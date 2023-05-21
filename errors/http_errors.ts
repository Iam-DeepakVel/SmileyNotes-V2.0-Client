class HttpError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

//!Status code: 401
export class UnauthorizedError extends HttpError {}

//! Status Code: 409
export class ConflictError extends HttpError {}
