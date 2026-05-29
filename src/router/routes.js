import { renderizarHome } from "../views/home";
import { renderLogin } from "../views/auth/login";
import { renderRegister, setupRegister } from "../views/auth/register";
import { renderizarDashboard } from "../views/app/dashboard";
import { renderProfile } from "../views/auth/profile";
import { renderAdmin } from "../views/admin/admin";
import { renderTaskForm } from "../views/tasks/task-form";
import { renderTask } from "../views/tasks/tasks";
import { renderNotFound } from "../views/not-found";

export const routes = {
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
        setup: null
    },
    "/profile": {
        render: renderProfile,
        setup: null
    },
    "/admin": {
        render: renderAdmin,
        setup: null
    },
    "/task-form": {
        render: renderTaskForm,
        setup: null
    },
    "/tasks": {
        render: renderTask,
        setup: null
    }
}

export const notFoundView = renderNotFound
