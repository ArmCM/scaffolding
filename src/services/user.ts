import PrismaSingleton from "../database/prismaClient";

class User {
    private prisma;

    constructor() {
        this.prisma = PrismaSingleton.getInstance();
    }

    public async findOne()
    {
        return await this.prisma.users.findFirst();
    }
}

export default new User();
