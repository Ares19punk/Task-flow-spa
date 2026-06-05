import { traerTareas } from "../../services/task.service"
import { traerUsuarios } from "../../services/users.service"

export function renderAdmin() {
    return `
  <body class="min-h-screen bg-sky-50 text-slate-800">
    <header class="border-b border-blue-100 bg-white/90 backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a class="text-xl font-black text-blue-900" href="/" data-link>TaskFlowSPA</a>
        <nav class="hidden gap-3 md:flex">
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/dashboard" data-link>Dashboard</a>
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/tasks" data-link>Tareas</a>
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/profile" data-link>Perfil</a>
          <a class="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white" href="/admin" data-link>Admin</a>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-10">
      <section class="rounded-[2rem] bg-blue-600 px-8 py-10 text-white shadow-xl shadow-blue-100">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Rol administrador</p>
        <h1 class="mt-3 text-4xl font-black tracking-tight">Panel administrativo</h1>
        <p class="mt-4 max-w-2xl text-blue-50">Vista reservada para gestionar usuarios, roles, permisos y monitoreo general del sistema.</p>
      </section>

      <section class="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <article class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          <h2 class="text-xl font-bold text-slate-900">Acciones rapidas</h2>
          <div class="mt-5 grid gap-4">
            <button id="btnUsuarios" type="button" class="rounded-2xl bg-blue-50 px-5 py-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 text-start">Gestionar usuarios</button>
            <button id="btnTareas" type="button" class="rounded-2xl bg-blue-50 px-5 py-4 text-sm font-semibold text-blue-700 hover:bg-blue-100 text-start">Ver todas las tareas</button>
            <a class="rounded-2xl bg-blue-50 px-5 py-4 text-sm font-semibold text-blue-700 hover:bg-blue-100" href="/dashboard" data-link>Volver al dashboard</a>
          </div>
        </article>

        <section class="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-50">
          
          <article id="contentAdmin">
            <h2 class="text-xl font-bold text-slate-900 text-center">¿Que acción rapida desea validar?</h2>
          </article>
          
        </section>
      </section>
    </main>
  </body>`
}

export function setupAdmin(){
  const btnUsuarios = document.getElementById("btnUsuarios")
  const btnTareas = document.getElementById("btnTareas")

  const contentElements = document.getElementById("contentElements")
  const contentUsers = document.getElementById("contentAdmin")

  btnUsuarios.addEventListener("click", async function(event){
    event.preventDefault()

    let htmlUsers = `<div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">Usuarios</h2>
            <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Mockup</span>
          </div>`

    const users = await traerUsuarios()

    if(!users){
      return
    }

    for (const user of users) {
      htmlUsers += `<div class="mt-5 space-y-4">
            <div class="rounded-2xl bg-blue-50 p-4">
              <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p class="font-bold text-slate-900">${user.name} ${user.lastName}</p>
                  <p class="text-sm text-slate-500">${user.email}</p>
                </div>
                <div class="flex gap-2">
                  <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-700">${user.roles}</span>
                  <a class="rounded-full border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-white" href="/admin" data-link>Editar rol</a>
                </div>
              </div>
            </div>`
    }

    contentUsers.innerHTML = htmlUsers
  })

  btnTareas.addEventListener("click", async function (event) {
    event.preventDefault()
    let htmlTasks = `<div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">Tareas de usuarios</h2>
            <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Mockup</span>
          </div>`

    const tasks = await traerTareas()

    if(!tasks || tasks.length === 0){
      contentUsers.innerHTML = ` <p class="font-bold text-slate-900">No hay tareas registradas.</p>`
      return
    }

    for (const task of tasks) {
      htmlTasks += `<br>
      <article rounded-2xl bg-blue-50 p-4">
        <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p class="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">${task.status}</p>
            <h3 class="mt-2 font-bold text-slate-900">${task.title}</h3>
          </div>
          <div class="flex gap-2">
            <button class="rounded-full border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-white">
              Ver
            </button>
            <button class="rounded-full border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-white">
              Eliminar
            </button>
          </div>
        </div>
      </article>`
    }
    contentUsers.innerHTML = htmlTasks
  })

  
}