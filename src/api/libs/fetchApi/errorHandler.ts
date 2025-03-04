export class APIError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
  }
}

export class ValidationError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

export class NetworkError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = 503;
  }
}

export class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

export class UnauthorizedError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = 401;
  }
}

export const handleError = (error: unknown): never => {
  switch (true) {
    case error instanceof APIError:
      console.error(`[API Error] ${error.message} (Status: ${error.statusCode})`);
      break;
    case error instanceof ValidationError:
      console.error(`[Validation Error] ${error.message} (Status: ${error.statusCode})`);
      break;
    case error instanceof NetworkError:
      console.error(`[Network Error] ${error.message} (Status: ${error.statusCode})`);
      break;
    case error instanceof NotFoundError:
      console.error(`[Not Found Error] ${error.message} (Status: ${error.statusCode})`);
      break;
    case error instanceof UnauthorizedError:
      console.error(`[Unauthorized Error] ${error.message} (Status: ${error.statusCode})`);
      break;
    case error instanceof Error:
      console.error(`[Error] ${error.message}`);
      break;
    default:
      console.error(`[Unknown Error]`, error);
  }
  throw error;
};
