import { Router } from 'express';
import Route from '../../core/router';
import BaseController from '../../controllers/BaseController';
import { exampleValidationRequest } from "../../controllers/FormRequest/exampleValidationRequest";

const router = Router();
const route = new Route(router);

route.register({
    method: 'get',
    path: '/example',
    handlers: [ BaseController.index ],
});

route.register({
    method: 'get',
    path: '/example/create',
    handlers: [ BaseController.create ],
});

route.register({
    method: 'get',
    path: '/example/:id',
    handlers: [ BaseController.show ],
});

route.register({
    method: 'post',
    path: '/example',
    validators: [exampleValidationRequest()],
    handlers: [ BaseController.store ],
});

route.register({
    method: 'get',
    path: '/example/:id/edit',
    handlers: [ BaseController.edit ],
});

route.register({
    method: 'patch',
    path: '/example/:id',
    handlers: [ BaseController.update ],
});

route.register({
    method: 'delete',
    path: '/example/id',
    handlers: [ BaseController.destroy ],
});

export default router;
