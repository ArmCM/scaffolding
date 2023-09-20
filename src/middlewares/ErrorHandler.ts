import { NextFunction, Request, Response } from "express";
import HttpException from "../Exceptions/HttpException";
import UserExists from "../Exceptions/UserExists";
import UserNotFound from "../Exceptions/UserNotFound";
import AuthExceptions from "../Exceptions/AuthExceptions";

function errorMiddleware(
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction,
) {
    if (
        error instanceof UserExists ||
        error instanceof UserNotFound ||
        error instanceof AuthExceptions
    ) {
        const success = error.success;
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        const stack =
            process.env.NODE_ENV === "production" ? undefined : error.stack;

        response.status(400).json({
            success,
            error: {
                status,
                message,
                stack,
            },
        });
    }

    next(error);
}

export default errorMiddleware;
