import "./styles/global.css";
import { renderizarHome } from "./views/home";
import { renderRegister, setupRegister } from "./views/auth/register";
import { renderProfile } from "./views/auth/profile";
import { renderTaskForm } from "./views/tasks/task-form";
import { renderTask } from "./views/tasks/tasks";
import { renderAdmin } from "./views/admin/admin";


const app = document.getElementById("app")

app.innerHTML = renderAdmin()

await setupRegister()


