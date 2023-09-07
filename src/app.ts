import express, { Application } from 'express';
import api from './router/api';
import cors from "./middlewares/cors";
import { PrismaClient } from '@prisma/client'

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
    this.start();
  }

  private initializeMiddlewares() {
    this.app.use(cors.configure());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.use('/api', api);
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
