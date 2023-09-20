import { Request, Response } from 'express';
import AuthenticateService from '../../services/AuthenticateService';
import RegisterService from '../../services/registerService';

class RegisterController {
    public async store(request: Request, response: Response) {
        const registeredUser = await RegisterService.create(
            request.body.name,
            request.body.last_name,
            request.body.email,
            request.body.password,
        );

        const token = await AuthenticateService.createToken(registeredUser);

        response.status(200).json({ token: token });
    }
}

export default new RegisterController();
