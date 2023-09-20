class AuthExceptions extends Error {
    success: boolean;
    status: number;

    constructor(message?: string) {
        super(message);
        this.success = false;
        this.status = 401;
        this.message = message ?? 'Error en la autenticación.';
    }

    public invalidPassword()
    {
        this.message = 'Credenciales inválidas.';

        return this;
    }
}

export default AuthExceptions;
