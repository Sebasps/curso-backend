//Definicion o creación de un arreglo
//Para crear un arreglo solo es necesario utilizar la siguiente extructura
// const nombreArreglo=["elemento1","elemento2",...]
const colores=["Gris","Verde","Rosado","Azul","Morado","Naranja","Amarrillo","Blanco"]
//El primer elemento del arreglo SIEMPRE comienza en 0
console.log(colores)
//Para acceder a un elemento en especifico de un arreglo se utiliza el id que asigna de la siguiente manera
console.log(colores[1])
console.log(colores[4])
//En js se pueden realizar arreglos con multiples tipos de datos incluyendo arreglos
const variosDatos=["A","Dato caracter o string", 2356, true,["Liliana", 32,["Comida favorita","Cancion favorita"]]]
console.log(variosDatos)
console.log(variosDatos[2])
console.log(variosDatos[4][1])
console.log(variosDatos[4][2][0])

const informacion=["Desarrolladora","Liliana", "Herrera", 32, "docentelherrera@udistrital.edu.co", 3124597]
console.log(`El correo es: ${informacion[3]}`)

//Metodos para manipulación de arreglos
//Push sirve para agregar un nuevo elemento a un arreglo
informacion.push("Calle 40B # 8 -23")
console.log(informacion)
informacion.push("AB+")
console.log(informacion)
//Pop es el metodo que nos sirve para quitar el ultimo elemento de un arreglo
informacion.pop()
console.log(informacion)
//Splice permite eliminar un elemento de acuerdo a la posicion que tiene
//En este caso, elimina el elemento que se encuentra en la posicion 0 y elimino 2 elementos
informacion.splice(0,1)
console.log(informacion)

//Define un arreglo de 100 elementos y llena los 100 elementos con true
const numeros=Array(100).fill(true)
console.log(numeros)
numeros.push(false)
console.log(numeros)

//Propiedad: Length permite saber cual es el tamaño de un arreglo
console.log("El arreglo información tiene: ", informacion.length, "elementos")

//Recorriendo arreglos
//Para recorrer arreglos se suele utilizar el estructura de control For
const localidades=["Kennedy", "Usaquen", "Bosa", "Suba", "Fontibon", "Sumapaz", "Teusaquillo", "Chapinero", "Ciudad Bolivar", "Antonio Nariño", "Santa Fe", "Martires", "Puente Aranda", "Soacha", "Tunjuelito", "Usme", "Engativa", "La candelaria"]
console.log(`En el arreglo localidades hay ${localidades.length} localidades`)

console.log(localidades[1])
console.log(localidades[2])
console.log(localidades[3])
console.log(localidades[4])
console.log(localidades[5])
console.log(localidades[6])

//La estructura de control for sirve para recorrer un arreglo
for(let i=0;i<localidades.length;i++){
    console.log(`La localidad ${i} es ${localidades[i]}`)
}

for(let i=0; i<colores.length;i++){
    console.log(`Tengo el ${colores[i]} en mi arreglo colores`)
}

//Foreach: es una estructura de control especialmente util para estructuras de datos compuestas como los arreglos

informacion.forEach(dato => {
    console.log(dato)
})

colores.forEach(color=>{
    console.log(`Recorriendo colores con foreach: ${color}`)
})

localidades.forEach(localidad=>{
    console.log(`Recorriendo localidades con foreach: ${localidad}`)
})

const cancionesFavoritas=["Eclipse de amor", "forever de kiss", "dias tras dia ", "el serrucho de mr. black", "Get Lucky", "I waiting for you", "Open sesami", "chau - no te va a gustar", "Perfect", "november rain", "Las mañanitas", "Elevation U2", "Radio Ga Ga", "i wanna be yours","you spin me round", "10 mil porques beret", "universe de colplay"]
console.log(cancionesFavoritas.length)

//Top 3 de las canciones favoritas
for (let i = 0; i < 3; i++) {
    console.log(cancionesFavoritas[i]); 
}

cancionesFavoritas.forEach(cancion=>{
    console.log(`Cancion favorita: ${cancion}`)
})

console.log("-------------------------Objetos ")
//Objetos

const carro = {
    //Propiedades del carro
    //Propiedades son caracteristicas propias del objeto
    marca: "Suzuki",
    color: "Negro",
    tamanio: "Grande",
    anio: 2021,
    duenios: ["Liliana", "Vanesa", "Juan", "Sebastian"],
    //Metodos del carro
    //Los metodos son comportamiento o acciones propias del objeto
    acelerar: function(){
        return "Estoy acelerando"
    },
    frenar: function(){
        return "Estoy frenando"
    }
}

//Acceder a las propiedades de un objeto
console.log(`El año del vehiculo es ${carro.anio} y la marca es ${carro.marca}. Los dueños son:`)

// console.log(carro.duenios)
//Acceder a las propiedades que se encuentran dentro del arreglo que esta dentro del objeto
carro.duenios.forEach(duenio => {
    console.log(duenio)
})

carro.duenios.pop()
console.log(`El primer dueño del carro fue ${carro.duenios[0]}`)

console.log(carro.duenios)
console.log(carro.duenios[1])
carro.duenios[1]={
    nombre: "Vanessa",
    apellido: "Lineros",
    edad: 21
}
console.log(carro.duenios[1])
console.log(carro.duenios)

//Acceder a los metodos de un objeto
console.log(carro.acelerar())
console.log(carro.frenar())

//Modificar las propiedades de un objeto
console.log(carro.marca)
carro.marca="BMW"
console.log(carro.marca)

const mascota = {
    //Propiedades
    nombre: "Tara",
    edad: "5 años",
    duenio : {
        nombre: "Liliana",
        apellido: "Herrera",
        edad: 32,
        contacto: {
            telefono: 32146556,
            correo: "liliana@gmail.com",
            direccion: "calle 14#54-5"
        }
    },
    vacunado: true,
    raza: "Beagle",
    amigos: ["Tinny", "Tom", "Princesa", "Paquita", "Luna", "Eron", "Simba", "Gordo", "Juana"],
    //Metodos
    ladrar: function(){
        return "Guau guau"
    },
    correr: function () {
        return "Estoy corriendo!"
    },
    comer: function () {
        return "Estoy comiendo"
    },
    morder: function(){
        return "Estoy mordiendo"
    }
}

console.log(mascota)
console.log(`El telefono del dueño de la mascota ${mascota.nombre} es: ${mascota.duenio.contacto.telefono}`)