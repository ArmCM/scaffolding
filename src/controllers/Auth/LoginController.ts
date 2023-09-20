import {Request, Response} from 'express';
import UserService from '../../services/userService';
import AuthenticateService from '../../services/AuthenticateService';

class LoginController {
    public async signedLogin(request: Request, response: Response) {
        const user = await UserService.findByEmail(request.body.email);

        await AuthenticateService.validatePassword(request.body.password, user.password);

        const token = await AuthenticateService.createToken(user, { expiration: '4h' });

        return response.status(200).json({ token: token });
    }
}

export default new LoginController();
