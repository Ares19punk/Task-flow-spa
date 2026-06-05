import { renderRouter } from "../../router/router"
import { actualizarUsuario } from "../../services/users.service"
import { authStore } from "../../store/authstore"

export function renderProfile() {
  const currentUser = authStore.getUser()

    return ` <body class="min-h-screen bg-sky-50 text-slate-800">
    <header class="border-b border-blue-100 bg-white/90 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a class="text-xl font-black text-blue-900" href="/" data-link>TaskFlowSPA</a>
        <nav class="hidden gap-3 md:flex">
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/dashboard" data-link>Dashboard</a>
          <a class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700" href="/tasks" data-link>Tareas</a>
          <a class="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white" href="/profile" data-link>Perfil</a>
        </nav>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 py-10">
      <section class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <aside class="rounded-[2rem] bg-blue-600 p-8 text-white shadow-xl shadow-blue-100">
          <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Cuenta</p>
          <h1 class="mt-3 text-4xl font-black tracking-tight">Mi perfil</h1>
          <p class="mt-4 text-blue-50">El usuario puede actualizar sus datos personales y gestionar su propia cuenta dentro del sistema.</p>
        </aside>

        <section class="rounded-[2rem] border border-blue-100 bg-white p-8 shadow-xl shadow-blue-50">
          <form id="formEditar" class="grid gap-5">
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700" for="name">Nombre</label>
              <input id="name" value="${currentUser.name}" type="text" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700" for="profile-email">Correo</label>
              <input id="profile-email" type="email" value="${currentUser.email}" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 focus:border-blue-400 focus:outline-none" />
            </div>
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700" for="password-new">Nueva contrasena</label>
              <input id="password-new" type="password" placeholder="Actualiza tu contrasena" class="w-full rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none" />
            </div>
            <div class="flex flex-col gap-3 pt-2 sm:flex-row">
              <button id="guardar-cambios" type="submit" class="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-500">Guardar cambios</button>
              <a class="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50" href="/login" data-link>Eliminar mi cuenta</a>
            </div>
          </form>
        </section>
      </section>
    </main>
  </body>

`
}
export function setupProfile(){
  const currentUser = authStore.getUser()
  
  const formEditar = document.getElementById("formEditar")

  const editarNombre = document.getElementById("name")
  const editarCorreo = document.getElementById("profile-email")
  const editarContrasena = document.getElementById("password-new")

  

  formEditar.addEventListener("submit", async function(event){
    event.preventDefault()

    const usuarioEditado = {
      "name": editarNombre.value.trim(),
      "lastName": currentUser.lastName,
      "email": editarCorreo.value.trim(),
      "password": editarContrasena.value.trim() === ""
      ? currentUser.password : editarContrasena.value.trim(),
      "roles": currentUser.roles,
      "id": currentUser.id
    }

    authStore.login(userUdapte)

    const userUdapte = await actualizarUsuario(currentUser.id, usuarioEditado)

    if(!userUdapte){
      return
    }

    window.history.pushState({},"","/dashboard")
    renderRouter()
  })

}