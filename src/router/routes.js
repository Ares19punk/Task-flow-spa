import { renderizarHome } from "../views/home";
import { renderLogin, setupLogin } from "../views/auth/login";
import { renderRegister, setupRegister } from "../views/auth/register";
import { renderizarDashboard, setupDashboard } from "../views/app/dashboard";
import { renderProfile, setupProfile } from "../views/auth/profile";
import { renderAdmin, setupAdmin } from "../views/admin/admin";
import { renderTaskForm, setupTaskForm } from "../views/tasks/task-form";
import { renderTask, setupTask } from "../views/tasks/tasks";
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
        setup: setupDashboard,
        isPublic: false
    },
    "/profile": {
        render: renderProfile,
        setup: setupProfile,
        isPublic: false
    },
    "/admin": {
        render: renderAdmin,
        setup: setupAdmin,
        isPublic: false
    },
    "/task-form": {
        render: renderTaskForm,
        setup: setupTaskForm,
        isPublic: false
    },
    "/tasks": {
        render: renderTask,
        setup: setupTask,
        isPublic: false
    }
}

export const notFoundView = renderNotFound
