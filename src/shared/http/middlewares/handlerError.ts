import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

const handlerError = (error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: `Error ${error.statusCode}`,
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Error 500',
    message: 'Internal Server Error.',
  });
};

export default handlerError;
