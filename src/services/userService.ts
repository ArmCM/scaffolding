import UserExists from '../Exceptions/UserExists';
import UserNotFound from '../Exceptions/UserNotFound';
import Prisma from '../core/prismaClient';

class UserService {
    private prisma;

    constructor() {
        this.prisma = Prisma.getInstance();
    }

    public async findByEmail(email: string)
    {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            },
        });

        if (!user) {
            throw new UserNotFound();
        }

        return user;
    }

    public async findById(userId: number)
    {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            },
        });

        if (!user) {
            throw new UserNotFound();
        }

        return user;
    }

    public async create(params: any)
    {
        return await this.prisma.user.create({
            data: params,
        });
    }

    public async checkIfUserExists(email: string)
    {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (user) {
            throw new UserExists();
        }
    }
}

export default new UserService();
