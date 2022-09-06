import { NextFunction, Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response, next: NextFunction) => {
  return response.json({
    message: 'Hello Dev!',
    timestamp: new Date(),
  });
});

export default routes;
