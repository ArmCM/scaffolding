import { header } from 'express-validator';

export function verifyTokenRequest() {
    return [
        header('Authorization')
            .trim()
            .notEmpty().withMessage('Token is required.')
            .isString().withMessage('Token must be a string.')
    ];
}
