import { renderizarHome } from "../views/home";
import { renderLogin } from "../views/login";
import { renderRegister } from "../views/register";

const routes = {
    "/": renderizarHome,
    "/login": renderLogin,
    "/register": renderRegister
}