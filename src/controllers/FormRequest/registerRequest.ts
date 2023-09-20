import { body } from "express-validator";
import UserService from "../../services/userService";

export function registerRequest() {
    return [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Name is required")
            .matches(/^[\p{L} .'-]+$/u)
            .withMessage("Name must only contain UTF-8 characters")
            .isString()
            .withMessage("Name must be a string")
            .isLength({ min: 3, max: 30 })
            .withMessage("Name must be between 3 and 30 characters"),

        body("last_name")
            .trim()
            .notEmpty()
            .withMessage("Last name is required")
            .matches(/^[\p{L} .'-]+$/u)
            .withMessage("Last name must only contain UTF-8 characters")
            .isString()
            .withMessage("Last name must be a string")
            .isLength({ min: 3, max: 30 })
            .withMessage("Last name must be between 3 and 30 characters"),

        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .custom(async (email) => {
                await UserService.checkIfUserExists(email);
            }),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({ min: 7, max: 30 })
            .withMessage("Password must be between 7 and 30 characters"),
    ];
}
