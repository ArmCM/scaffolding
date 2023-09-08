import PrismaSingleton from "../database/prismaClient";

class Visibility {
    private prisma;

    constructor() {
        this.prisma = PrismaSingleton.getInstance();
    }

    public async findByName(name: string)
    {
        return await this.prisma.visibility.findFirst({
            where: {
                name: name
            },
        });
    }
}

export default new Visibility();
