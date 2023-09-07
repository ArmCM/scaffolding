import { body } from 'express-validator';

export function exampleValidationRequest() {
    return [
        body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    ];
}
