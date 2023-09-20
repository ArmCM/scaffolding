import express, { Application } from 'express';
import 'express-async-errors';
import api from './router/v1/api';
import cors from "./middlewares/cors";
import { PrismaClient } from '@prisma/client'
import errorHandler from "./middlewares/ErrorHandler";


class App {
  public app: Application;
  public port: number;
  public host: string;
  private prisma: PrismaClient;

  constructor(port: number, prisma: PrismaClient) {
    this.app = express();
    this.port = port;
    this.host = process.env.HOST || 'localhost';
    this.prisma = prisma;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeCustomErrorHandler();
    this.start();
  }

  private initializeMiddlewares() {
    this.app.use(cors.configure());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.use('/api/v1', api);
  }

  private initializeCustomErrorHandler() {
    this.app.use(errorHandler);
  }

  public start() {
    this.prisma.$connect()
        .then(() => {
          console.info(`🏛  Established connection to the database.`);
        })
        .then(() => {
          this.app.listen(this.port, () => {
            console.info(`🌎 Web Server: http://${this.host}:${this.port}\n`);
          });
        })
        .catch((error) => {
          console.error('Error connecting to the database:', error);
        });
  }

  public async stop() {
    await this.prisma.$disconnect();
  }
}

export default App;
