import PrismaSingleton from "../database/prismaClient";

class State {
    private prisma;

    constructor() {
        this.prisma = PrismaSingleton.getInstance();
    }

    public async findById(id: number)
    {
        return await this.prisma.status.findUnique({
            where: {
                id: id,
            },
        });
    }

    public async findByName(state: string)
    {
        return await this.prisma.status.findFirst({ where: { name: state } });
    }
}

export default new State();
