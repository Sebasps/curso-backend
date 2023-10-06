let display = document.getElementById("response")
let numbers = Array.from(document.getElementsByClassName("number"))
let operators = Array.from(document.getElementsByClassName("operator"))
const cuenta = []


numbers.forEach(number => {
	number.addEventListener("click",function(){
        display.value = display.value+this.value
    })
})
operators.forEach(operator => {
	operator.addEventListener("click",function(){
        if (this.value!="="){
        	if (this.value=="-" && display.value==""){
				display.value = "-"
			}
			else{
				cuenta.push(parseFloat(display.value))
				cuenta.push(this.value)
				display.value = ""
			}
    	}
        else{
        	cuenta.push(parseFloat(display.value))
        	let resultado = cuenta[0]
			for (let i=0; i<cuenta.length; i++){
				if (cuenta[i]=="+"){
					resultado = resultado+cuenta[i+1]
				}
				else if (cuenta[i]=="-"){
					resultado = resultado-cuenta[i+1]
				}
				else if (cuenta[i]=="*"){
					resultado = resultado*cuenta[i+1]
				}
				else if (cuenta[i]=="/"){
					resultado = resultado/cuenta[i+1]		
				}
        	}
        	display.value = resultado
        }
    })
})
