export async function crearUsuario(usuario) {
    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    });

    if(!response){
        throw new Error("Error al crear usuario.")
    }

    return await response.json();
}

export async function traerUsuarios() {
    const response = await fetch("http://localhost:3000/users")

    if(!response){
        throw new Error("Error al obtener los usuarios.")
    }

    return await response.json();
}

export async function obtenerUsuario(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    if(!response){
        throw new Error("Error al obtener el usuario.")
    }
    const usuario = response.json()
    return usuario
    
}

export async function obtenerUsuarioEmail(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email}`)
    if(!response){
        throw new Error("Error al consultar el usuario.")
    }

    const usuario = await response.json()
    if(usuario.length === 0){
        return null
    }

    return usuario[0]
}

export async function actualizarUsuario(id, usuarioEditado) {
    try{
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(usuarioEditado)
        })

        const usuarioActualizado = await response.json()
        return usuarioActualizado
    }catch(error){
        console.error("Error de conexion.", error)
        alert("No se puede conectar con el servidor")
    }
}


