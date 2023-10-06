let botonSuma = document.getElementById("suma")
let botonResta = document.getElementById("resta")
let botonMultiplicacion = document.getElementById("multiplicacion")
let botonDivision = document.getElementById("division")
let resultado

function operacion(operador){
    let numeroUno = document.getElementsByClassName("numero")[0].value
    let numeroDos = document.getElementsByClassName("numero")[1].value
    if (operador=="suma"){
        resultado = parseInt(numeroUno)+parseInt(numeroDos)       
    }
    else if (operador=="resta"){
        resultado = parseInt(numeroUno)-parseInt(numeroDos)
    }
    else if (operador=="multiplicacion"){
        resultado = parseInt(numeroUno)*parseInt(numeroDos)
    }
    else if (operador=="division"){
        resultado = parseInt(numeroUno)/parseInt(numeroDos)
    }
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent = `El resultado es: ${resultado}`
}

botonSuma.addEventListener("click",function (){
    operacion("suma")
})
botonResta.addEventListener("click",function (){
    operacion("resta")
})
botonMultiplicacion.addEventListener("click",function (){
    operacion("multiplicacion")
})
botonDivision.addEventListener("click",function (){
    operacion("division")
})
