import { Router, RequestHandler } from 'express';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface RouteDefinition {
    method: HttpMethod;
    path: string;
    handlers: RequestHandler[];
}

class Route {
    private readonly router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public register({ method, path, handlers }: RouteDefinition): void {
        this.router[method](path, handlers);
    }
}

export default Route;
