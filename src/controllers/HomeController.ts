import { Request, Response } from 'express';

class HomeController {
    public async index(request: Request, response: Response) {
        return response.status(200).json({ message: 'WIP - message' });

    }
}

export default new HomeController;
