import AppDataSource from '@shared/typeorm';
import cors from 'cors';
import express, { Application } from 'express';
import 'reflect-metadata';
import handlerError from './middlewares/handlerError';
import routes from './routes';

class Server {
  private _server: Application;
  private _port: number;

  constructor() {
    this._server = express();
    this._port = 3333;
    this._server.use(cors());
    this._server.use(express.json());
    this._server.use(routes);
    this._server.use(handlerError);

    this.Initialize(this._port);
  }

  private Initialize(port: number) {
    try {
      this._server.listen(port, () => {
        AppDataSource;
        console.log(`=> API is running. Listening on port ${port}! 🏆`);
      });
    } catch (err) {
      console.log(`=> API is not running. Because: ${err}`);
    }
  }
}

new Server();
