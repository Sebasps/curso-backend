let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let fechaNacimiento = document.getElementById("fechaNacimiento")
let botonFechaNacimiento = document.getElementById("enviar")

class Usuarios{
    constructor(nombre, apellido, fechaNacimiento){
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNacimiento = fechaNacimiento
    }
}

botonFechaNacimiento.addEventListener("click", function (){
    let valorNombre = nombre.value
    let valorApellido = apellido.value
    let valorFechaNacimiento = fechaNacimiento.value

    const usuario = new Usuarios(valorNombre, valorApellido, valorFechaNacimiento)
    let usuarios = []

    let localUsuarios = localStorage.getItem("usuarios")

    if (localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    usuarios.push(usuario)
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Usuario registrado")
})

const mostrarUsuarios = function (){
    let usuarios = []
    let localUsuarios = localStorage.getItem("usuarios")
    if (localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    let listaUsuarios = document.getElementById("listar-usuarios")
    usuarios.forEach(usuario => {
        let datoUsuario = document.createElement("li")
        datoUsuario.textContent = `Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - Fecha nacimiento: ${usuario.fechaNacimiento}`
        listaUsuarios.appendChild(datoUsuario)
    })
}

mostrarUsuarios()
