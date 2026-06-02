import { authStore } from "../store/authstore"
import { notFoundView, routes} from "./routes"


export function renderRouter(){
    const app = document.getElementById("app")

    if(!app){
        return
    }

    const currentPath = window.location.pathname

    const route = routes[currentPath] ?? {render: notFoundView , isPublic: true}

    if(!route.isPublic && !authStore.isAuthenticated()){
        alert("Debe iniciar sección.")

        window.history.pushState({},"","/login")
        const loginRoute = routes["/login"]
        app.innerHTML = loginRoute.render()

        if(loginRoute.setup){
            loginRoute.setup()
        }
        return
    }

    if(authStore.isAuthenticated() && route.redirectIfAuthenticated === true){
        alert("Debe iniciar sección.")

        window.history.pushState({},"","/dashboard")
        const dashboardRoute = routes["/dashboard"]
        app.innerHTML = dashboardRoute.render()

        if(dashboardRoute.setup){
            dashboardRoute.setup()
        }
        return
    }

    app.innerHTML = route.render()
    
    if (route.setup) {
        route.setup()
    }
    
}

export function initRouter(){
    document.addEventListener("click", function(event){
        const link = event.target.closest("a")

        if(!link){
            return
        }
        const href = link.getAttribute("href")

        if(!href || !href.startsWith("/")){
            return
        }
        event.preventDefault()

        window.history.pushState({}, "", href)
        renderRouter()
    })
}


