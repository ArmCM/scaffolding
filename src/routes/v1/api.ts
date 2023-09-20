import { Router } from "express";
import Route from "../../core/router";
import HomeController from "../../controllers/HomeController";
import LoginController from "../../controllers/Auth/LoginController";
import RegisterController from "../../controllers/Auth/RegisterController";
import { loginRequest } from "../../controllers/FormRequest/loginRequest";
import { registerRequest } from "../../controllers/FormRequest/registerRequest";

const router = Router();
const route = new Route(router);

/*
|--------------------------------------------------------------------------
| Home
|--------------------------------------------------------------------------
*/

route.register({
    method: "get",
    path: "/",
    handlers: [HomeController.index],
});

/*
|--------------------------------------------------------------------------
| Auth
|--------------------------------------------------------------------------
*/

route.register({
    method: "post",
    path: "/login",
    validators: [loginRequest()],
    handlers: [LoginController.signedLogin],
});

route.register({
    method: "post",
    path: "/register",
    validators: [registerRequest()],
    handlers: [RegisterController.store],
});

export default router;
