import { renderizarHome } from "../views/home";
import { renderLogin } from "../views/auth/login";
import { renderRegister, setupRegister } from "../views/auth/register";
import { renderizarDashboard } from "../views/app/dashboard";
import { renderProfile } from "../views/auth/profile";
import { renderAdmin } from "../views/admin/admin";
import { renderTaskForm } from "../views/tasks/task-form";
import { renderTask } from "../views/tasks/tasks";

const routes = {
    "/": {
        render: renderizarHome,
        isPublic: true
    },
    "/login": {
        render: renderLogin,
        setup: "",
        isPublic: true,
        redirectIfAuthenticated: true

    },
    "/register": {
        render: renderRegister,
        setup: setupRegister,
        isPublic: true,
        redirectIfAuthenticated: true
    },
    "/dashboard": {
        render: renderizarDashboard,
        setup: ""
    },
    "/profile": {
        render: renderProfile,
        setup: ""
    },
    "/admin": {
        render: renderAdmin,
        setup: ""
    },
    "/task-form": {
        render: renderTaskForm,
        setup: ""
    },
    "/tasks": {
        render: renderTask,
        setup: ""
    }
}