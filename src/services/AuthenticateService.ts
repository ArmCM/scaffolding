import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthExceptions from "../Exceptions/AuthExceptions";

interface TokenOptions {
    expiration?: string;
    algorithm?: string;
}

class AuthenticateService {
    public async hashPassword(password: string) {
        try {
            const salt = await bcrypt.genSalt();

            return await bcrypt.hash(password, salt);
        } catch (error: any) {
            throw new Error(`${error.message}`);
        }
    }

    public async createToken(user: any, options?: TokenOptions) {
        const payload = {
            user_id: user.id,
            email: user.email,
        };

        const secretKey = String(process.env.SECRET_KEY);
        const expiresIn = "1h";
        const algorithm = "HS256";

        return jwt.sign(payload, secretKey, {
            expiresIn,
            algorithm,
        });
    }

    public async validatePassword(password: string, userPassword: string) {
        const passwordMatch = await bcrypt.compare(password, userPassword);

        if (!passwordMatch) {
            throw new AuthExceptions().invalidPassword();
        }
    }

    public verifyToken(token: string) {
        try {
            const decodedToken: any = jwt.verify(
                token,
                String(process.env.SECRET_KEY),
            );

            return { userId: decodedToken.user_id, email: decodedToken.email };
        } catch (error: any) {
            throw new AuthExceptions(error.message);
        }
    }
}

export default new AuthenticateService();
