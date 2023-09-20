import PrismaSingleton from "../../src/core/prismaClient";
import { Prisma } from "@prisma/client";

const prisma = PrismaSingleton.getInstance();

/*
|--------------------------------------------------------------------------
| User Seed
|--------------------------------------------------------------------------
*/

const userSeeder = async () => {

    const usersData = [
        {
            name: 'Jane',
            last_name: 'Smith',
            email: 'janesmith@example.com',
            password: 'valid-password',
            created_at: new Date(),
            updated_at: new Date(),
        },
        {
            name: 'John',
            last_name: 'Doe',
            email: 'johndoe@example.com',
            password: 'valid-password',
            created_at: new Date(),
            updated_at: new Date(),
        },
    ];

    const createdUsers: Prisma.BatchPayload = await prisma.user.createMany({ data: usersData });

    console.info('Usuarios creados:', createdUsers);
};


/*
|--------------------------------------------------------------------------
| Run Seeders
|--------------------------------------------------------------------------
*/

const databaseSeeder = async () => {
    await userSeeder();

    await prisma.$disconnect();
}

databaseSeeder()
    .catch((error) => {
        console.error('error::', error);
    });
