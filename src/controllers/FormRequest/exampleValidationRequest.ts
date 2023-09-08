import { body } from 'express-validator';

export function exampleValidationRequest() {
    return [
        body('title')
            .notEmpty().withMessage('Title is required')
            .matches(/^[\p{L} .'-]+$/u).withMessage('Title must only contain UTF-8 characters')
            .isString().withMessage('Title must be a string')
            .isLength({ min: 5, max: 30 }).withMessage('Title must be between 2 and 255 characters')
    ];
}
