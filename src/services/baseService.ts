import PrismaSingleton from "../database/prismaClient";

class BaseModel {
    private prisma;
    private page: number;

    constructor() {
        this.prisma = PrismaSingleton.getInstance();
    }

    public async create(params: any)
    {
        await this.prisma.tasks.create({
            data: params,
        });
    }

    public paginate(page: number)
    {
        this.page = page;

        return this;
    }

    public async all()
    {
        try {
            const totalTasks = await this.prisma.tasks.count();

            const totalPages = Math.ceil(totalTasks / this.page);

            const tasks = await this.prisma.tasks.findMany({
                skip: (this.page - 1) * 2,
                take: 2,
            });

            return {
                code: 200,
                tasks: tasks,
                currentPage: 1,
                totalPages,
                message: 'todo OK',
            };

        } catch (error: any) {
            return {
                code: 500,
                tasks: 0,
                message: `Error al obtener las tareas. ${error.message}`,
            }
        }
    }

    public async findOne(id: number)
    {
        try {
            const task = await this.prisma.tasks.findUnique({
                where: {
                    id: id,
                },
            });

            return {
                code: 200,
                tasks: task,
                currentPage: 1,
                totalPages: 1,
                message: 'todo OK',
            };
        } catch (error: any) {
            return {
                code: 500,
                tasks: 0,
                message: `Error al obtener la tarea. ${error.message}`,
            }
        }
    }
}

export default new BaseModel();
