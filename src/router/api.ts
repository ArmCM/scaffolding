import { Router } from 'express';
import Route from './router';
import BaseController from '../controllers/BaseController';

const router = Router();
const route = new Route(router);

route.register({
    method: 'get',
    path: '/',
    handlers: [ BaseController.index ],
});

route.register({
    method: 'post',
    path: '/',
    handlers: [ BaseController.store ],
});

export default router;
