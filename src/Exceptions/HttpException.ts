class HttpException extends Error {
    success: boolean;
    status: number;
    message: string;

    constructor(status: number, message: string, name: string, success: boolean) {
        super(message);
        this.success = success;
        this.status = status;
        this.message = message;
    }
}

export default HttpException;
