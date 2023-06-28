import express, { Application } from 'express';
import api from './router/api';
import cors from "./middlewares/cors";
import Database from "./database/database";
class App {
  public app: Application;
  public port: number;
  public host: string;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.host = process.env.HOST || 'localhost';

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.connectToDatabase();
  }

  private initializeMiddlewares() {
    this.app.use(cors.configure());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes() {
    this.app.use('/api', api);
  }

  private connectToDatabase() {
    const database = Database.getInstance();

    database.connect()
      .then(() => {
        this.app.listen(this.port, () => {
          console.info(`🌎 Web Server: http://${this.host}:${this.port}\n`);
        });
      }).catch((error: any) => {
        console.error('Error al conectar a la base de datos:', error);
      });
  }
}

export default App;
