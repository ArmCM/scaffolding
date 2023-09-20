class UserExists extends Error {
    success: boolean;
    status: number;

    constructor(message?: string) {
        super(message);
        this.success = false;
        this.status = 400;
        this.message = message ?? "el usuario ya existe";
    }
}

export default UserExists;
