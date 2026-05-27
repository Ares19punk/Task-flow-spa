import "./styles/global.css";
import { renderizarHome } from "./views/home";
import { renderRegister } from "./views/register";


const app = document.getElementById("app")

app.innerHTML = renderRegister()
