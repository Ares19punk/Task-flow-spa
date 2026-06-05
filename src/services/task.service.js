export async function crearTarea(tarea) {
    const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tarea)
    });
    
    if(!response.ok){
        throw new Error("Error al crear la tarea.")
    }

    return await response.json();
}

export async function traerTareas() {
    const response = await fetch("http://localhost:3000/tasks")

    if(!response){
        throw new Error("Error al obtener las tareas.")
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

export async function eliminarTarea(id) {
    try{
        const response = await fetch(`http://localhost:3000/tasks/${id}`,{
            method: "DELETE"
        })

        if(response.ok === false){
            alert("Error al eliminar la tarea")
            return
        }

        return true
    } catch(error){
        console.error("Error de conexión")
        alert("No se pudo conectar al servidor.")
    }
}

export async function editarTarea(id, tareaEditada) {
    try{
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(tareaEditada)
        })

        const tareaActualizada = await response.json()
        return tareaActualizada
    }catch(error){
        console.error("Error de conexion.", error)
        alert("No se puede conectar con el servidor")
    }
}

export async function obtenerTarea(idTarea) {
    const response = await fetch(`http://localhost:3000/tasks/${idTarea}`);
    if(!response.ok){
        throw new Error("Error al obtener la tarea.")
    }
    const task = await response.json()
    return task
    
}