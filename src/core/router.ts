import { Router, RequestHandler } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';


type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface RouteDefinition {
    method: HttpMethod;
    path: string;
    handlers: RequestHandler[];
    validators?: ValidationChain[][];
}

const emptyValidators: ValidationChain[][] = [];

class Route {
    private readonly router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    public register({ method, path, handlers, validators = emptyValidators }: RouteDefinition): void
    {
        const allValidators = validators?.flat()
        this.router[method](
            path,
            allValidators,
            this.validationMiddleware(allValidators),
            handlers
        );
    }

    private validationMiddleware(validators: ValidationChain[]) {
        return async (request: Request, response: Response, next: NextFunction) => {

            const requestValidator = request.body ?? request.headers;

            try {
                await Promise.all(validators.map((validator) => validator.run(requestValidator)));

                const errors = validationResult(request);

                if (!errors.isEmpty()) {
                    return response.status(422).json({ errors: errors.array() });
                }

                next();
            } catch (err) {
                next(err);
            }
        };
    }
}

export default Route;
