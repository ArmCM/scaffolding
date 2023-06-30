import App from './app';
import dotenv from 'dotenv';
import PrismaSingleton from "./database/prismaClient";

dotenv.config();

const prisma = PrismaSingleton.getInstance();

new App(3000, prisma);
