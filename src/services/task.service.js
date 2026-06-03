export async function crearTarea(tarea) {
    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarea)
    });
    
    if(!response){
        throw new Error("Error al crear la tarea.")
    }

    return await response.json();
}

export async function obtenerTareasUsuario(id) {
    const response = await fetch(`http://localhost:3000/tasks?userid=${id}`)
    if(!response){
        throw new Error("Error al consultar el usuario.")
    }

    const userTaks = await response.json()
    if(userTaks.length === 0){
        return null
    }

    return userTaks
}