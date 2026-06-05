
import { renderRouter } from "../../router/router"
import { authStore } from "../../store/authstore"
import { setupLogin } from "../auth/login"
import { obtenerTareasUsuario } from "../../services/task.service"

function calcularEstadisticas(tareas) {

  if (tareas === null) {
    const estadisticasNull = {
      "pendiente": 0,
      "progreso": 0,
      "completo": 0,
    }
    return estadisticasNull
  }

  const pendienteTask = tareas.filter(function (task) {
    return task.status === "Pendiente"
  })

  const progresoTask = tareas.filter(function (task) {
    return task.status === "En progreso"
  })

  const completeTask = tareas.filter(function (task) {
    return task.status === "Completada"
  })

  const estadisticaTask = {
    "pendiente": pendienteTask.length,
    "progreso": progresoTask.length,
    "completo": completeTask.length,
  }

  return estadisticaTask

}

export function renderizarDashboard() {

  const currentUser = authStore.getUser()

  return `
  <body class="min-h-screen bg-sky-50 text-slate-800">
    <header class="border-b border-blue-100 bg-white/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a class="text-xl font-black text-blue-900" href="/" data-link>TaskFlowSPA</a>
        <nav class="hidden gap-3 md:flex">
          <a class="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white" href="/dashboard" data-link>Dashboard</a>
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/tasks" data-link>Tareas</a>
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/profile" data-link>Perfil</a>
          ${currentUser.roles[0] === "ADMIN" ? `<a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/admin" data-link>Admin</a>`: ""}
          <button id="logout" type="" class="rounded-full px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50" href="/login" data-link>Logout</button>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-6 py-10">
      <section class="rounded-[2rem] bg-blue-600 px-8 py-10 text-white shadow-xl shadow-blue-100">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Dashboard principal</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight">Bienvenida, ${currentUser.name}.</h1>
        <p class="mt-4 max-w-2xl text-blue-50">Resumen general del trabajo del usuario, accesos rapidos y estado actual de productividad.</p>
      </section>

      <section class="mt-8 grid gap-4 md:grid-cols-3">
        <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          <p class="text-sm text-slate-500">Tareas activas</p>
          <p id="statActivas" class="mt-3 text-4xl font-black text-blue-700">12</p>
        </article>
        <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          <p class="text-sm text-slate-500">Completadas</p>
          <p id="statCompletadas" class="mt-3 text-4xl font-black text-blue-700">28</p>
        </article>
        <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          <p class="text-sm text-slate-500">Pendientes hoy</p>
          <p id="statPendientes" class="mt-3 text-4xl font-black text-blue-700">4</p>
        </article>
      </section>

      <section class="mt-8">
        <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">Accesos rapidos</h2>
            <a class="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tasks" data-link>Ver tareas</a>
          </div>
          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <a id="crearTareaDash" class="rounded-3xl bg-blue-50 p-5 hover:bg-blue-100" href="/task-form" data-link>
              <p class="text-sm font-semibold text-blue-600">Crear</p>
              <h3 class="mt-2 text-lg font-bold text-slate-900">Nueva tarea</h3>
            </a>
            <a class="rounded-3xl bg-blue-50 p-5 hover:bg-blue-100" href="/profile" data-link>
              <p class="text-sm font-semibold text-blue-600">Cuenta</p>
              <h3 class="mt-2 text-lg font-bold text-slate-900">Editar perfil</h3>
            </a>
          </div>
        </article>
      </section>
    </main>
  </body>`
}
export async function setupDashboard() {

  const crearTareaDash = document.getElementById("crearTareaDash")
  const logout = document.getElementById("logout")

  if(crearTareaDash){
    crearTareaDash.addEventListener("click", function(event){
      localStorage.removeItem("taskEditar")
  })
  }
  

  logout.addEventListener("click", function (event) {
    event.preventDefault()

    authStore.logout()
    window.history.pushState({}, "", "/login")
    renderRouter()
  })

  const user = authStore.getUser()

  if (!user) {
    return
  }

  const tareas = await obtenerTareasUsuario(user.id)

  const estadisticas = calcularEstadisticas(tareas)

  const progreso = document.getElementById("statActivas")
  const pendiente = document.getElementById("statPendientes")
  const completo = document.getElementById("statCompletadas")

  progreso.textContent = estadisticas.progreso
  pendiente.textContent = estadisticas.pendiente
  completo.textContent = estadisticas.completo
}