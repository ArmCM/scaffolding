import mongoose from 'mongoose';

class Database {
    private static instance: Database;
    private readonly url: string;

    private constructor() {
        this.url = process.env.DATABASE_URL || '';
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.url);
            console.info(`🏛️  Conexión a la base de datos establecida`);
        } catch (error) {
            console.error('Error al conectar a la base de datos:', error);
            throw error;
        }
    }
}

export default Database;
