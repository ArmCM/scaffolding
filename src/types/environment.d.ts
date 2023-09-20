declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_NAME: string;
            NODE_ENV: string;
            PORT: number;
            HOST: string;
            DB_PORT: number;
            DB_HOST: string;
            DB_PASSWORD: string;
            DB_USER: string;
            DATABASE_URL: string;
            SECRET_KEY: string;
        }
    }
}

export {};
