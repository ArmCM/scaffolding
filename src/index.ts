import App from './app';
import dotenv from 'dotenv';
import PrismaSingleton from "./database/prismaClient";

dotenv.config();
const prisma = PrismaSingleton.getInstance();

const app = new App(3000, prisma);

process.on('SIGINT', () => {
    app.stop().then(() => {
        console.log('⚠️- App stopped gracefully');
        process.exit(0);
    });
});
