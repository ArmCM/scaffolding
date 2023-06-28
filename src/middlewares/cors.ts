import { RequestHandler } from 'express';
import cors, { CorsOptions } from 'cors';

class Cors {
    public static configure(): RequestHandler {
        const options: CorsOptions = {
            origin: '*', // Ajusta las opciones según tus necesidades
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Ajusta los métodos permitidos según tus necesidades
        };

        return cors(options);
    }
}

export default Cors;
