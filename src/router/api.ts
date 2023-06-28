import { Router, Request, Response } from 'express';
import { index, store } from '../controllers/location';

class api {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', index);
    this.router.post('/', store);
  }
}

export default new api().router;
