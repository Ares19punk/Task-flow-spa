import { renderizarHome } from "../views/home";
import { renderLogin, setupLogin } from "../views/auth/login";
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
        setup: setupLogin,
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
        setup: null,
        isPublic: false
    },
    "/profile": {
        render: renderProfile,
        setup: null,
        isPublic: false
    },
    "/admin": {
        render: renderAdmin,
        setup: null,
        isPublic: false
    },
    "/task-form": {
        render: renderTaskForm,
        setup: null,
        isPublic: false
    },
    "/tasks": {
        render: renderTask,
        setup: null,
        isPublic: false
    }
}

export const notFoundView = renderNotFound
