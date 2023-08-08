import PrismaSingleton from "../database/prismaClient";

class BaseModel {
    private prisma;
    private page: number;

    constructor() {
        this.prisma = PrismaSingleton.getInstance();
    }
}

export default new BaseModel();
