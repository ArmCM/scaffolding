import { RequestHandler } from 'express';
import cors, { CorsOptions } from 'cors';

class Cors {
    public static configure(): RequestHandler {
        const options: CorsOptions = {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        };

        return cors(options);
    }
}

export default Cors;
