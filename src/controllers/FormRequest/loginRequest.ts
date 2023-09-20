import { body } from "express-validator";
import UserService from "../../services/userService";

export function loginRequest() {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("email is required")
            .isEmail()
            .custom(async (email) => {
                await UserService.findByEmail(email);
            }),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({ min: 7, max: 30 })
            .withMessage("Password must be between 7 and 30 characters"),
    ];
}
