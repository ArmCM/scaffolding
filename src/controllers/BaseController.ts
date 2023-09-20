import { Request, Response } from 'express';

class BaseController {
    public async index(request: Request, response: Response) {}

    public async create (request: Request, response: Response) {}

    public async store (request: Request, response: Response) {}

    public async show (request: Request, response: Response) {}

    public async edit (request: Request, response: Response) {}

    public async update (request: Request, response: Response)   {}

    public async destroy (request: Request, response: Response) {}
}

export default new BaseController();
