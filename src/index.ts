import App from './app';
import dotenv from 'dotenv';
import PrismaSingleton from './core/prismaClient';

dotenv.config();
const prisma = PrismaSingleton.getInstance();

const app = new App(3000, prisma);

process.on('SIGINT', () => {
    app.stop().then(() => {
        /* eslint-disable no-console*/
        console.warn('⚠️- App stopped gracefully');
        process.exit(0);
    });
});
