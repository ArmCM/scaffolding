import PrismaSingleton from "../../src/database/prismaClient";

const prisma = PrismaSingleton.getInstance();

const createSeeders = async () => {
    // Create visibility options
    const visibility = [
        { name: 'public' },
        { name: 'private' },
        { name: 'shared'},
    ];

    const visibilityCreated = await prisma.visibility.createMany({ data: visibility });
    console.log('Estados de Visibilidad:', visibilityCreated);

    const visibilityStatus = await prisma.visibility.findMany();

    // Create roles
    const rolesData = [
        { name: 'admin' },
        { name: 'guest' },
        { name: 'registered' },
    ];

    const createdRoles = await prisma.roles.createMany({ data: rolesData });

    console.log('Roles creados:', createdRoles);

    const roles: any = await prisma.roles.findMany()

    // Create Status
    const statuses = [
        { name: 'work in progress'},
        { name: 'ready for review'},
        { name: 'rejected'},
        { name: 'done'},
    ];

    const createdStatus: any = await prisma.status.createMany({ data: statuses });

    console.log('Estados creados:', createdStatus);

    // Create Users
    const usersData = [
        {
            name: 'Jane',
            last_name: 'Smith',
            email: 'janesmith@example.com',
            phone: '987654321',
            rol_id: roles[0].id, // Asigna el ID del primer rol creado (Admin)
        },
        {
            name: 'John',
            last_name: 'Doe',
            email: 'johndoe@example.com',
            phone: '123456789',
            rol_id: roles[1].id, // Asigna el ID del segundo rol creado (User)
        },
    ];

    const createdUsers: any = await prisma.users.createMany({ data: usersData });

    console.log('Usuarios creados:', createdUsers);

    const status: any = await prisma.status.findMany();

    const users: any = await prisma.users.findMany();

    // Create Tasks
    const tasksData = [
        {
            title: 'Tarea 1',
            description: 'Descripción de la tarea 1',
            status: status[0].id,
            delivery_date: new Date(),
            visibility: visibilityStatus[0].id,
            comments: '',
            created_by: String(users[0].id),
            tags: '{"backend", "php"}',
            file: '',
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            title: 'Tarea 2',
            description: 'Descripción de la tarea 2',
            status: status[1].id,
            delivery_date: new Date(),
            visibility: visibilityStatus[1].id,
            comments: 'ejemplo de descripción',
            created_by: String(users[0].id),
            tags: '{"backend", "js"}',
            file: '',
            created_at: new Date(),
            updated_at: new Date(),
        },
    ];

    const createdTasks = await prisma.tasks.createMany({ data: tasksData });

    console.log('Tareas creadas:', createdTasks);

    await prisma.$disconnect();
};

createSeeders().catch((error) => {
    console.error(error);
});

