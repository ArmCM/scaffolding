import { Router, Request, Response } from 'express';
import { getHandler, postHandler } from '../controllers/example';

class api {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', getHandler);
    this.router.post('/', postHandler);
  }
}

export default new api().router;
