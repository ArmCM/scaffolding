import dotenv from 'dotenv';
import App from './app';

dotenv.config();
const port = 3000;

new App(port);
