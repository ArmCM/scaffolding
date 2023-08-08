import { body } from 'express-validator';

// This function returns an array of validation middleware for the 'createTask' request
export function exampleValidationRequest() {
    return [
        body('title').notEmpty().withMessage('Title is required').isString().withMessage('Title must be a string'),
    ];
}
