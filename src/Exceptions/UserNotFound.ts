class UserNotFound extends Error {
    success: boolean;
    status: number;

    constructor(message?: string) {
        super(message);
        this.success = false;
        this.status = 400;
        this.message = message ?? "El usuario no fue encontrado.";
    }
}

export default UserNotFound;
