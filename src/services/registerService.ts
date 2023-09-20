import AuthenticateService from './AuthenticateService';
import UserService from './userService';

class RegisterService {
    public async create(name: string, last_name: string, email: string, password: string)
    {
        const hashedPassword = await AuthenticateService.hashPassword(password);

        return await UserService.create({
            name: name,
            last_name: last_name,
            email: email,
            password: hashedPassword,
        });
    }
}

export default new RegisterService();
