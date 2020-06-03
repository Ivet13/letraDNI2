'use strict'

/* CALCULAR DNI */

// creamos una constante para guardar referencia al elemento HTML donde vamos a mostrar el resultado
const outputConfirmacionDNI = document.getElementById('confirmacionDNI')

// el array que sirve para poder calcular la letra del DNI correcta
const letrasSecuenciaOficial = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

// para poder calcular el modulo, necesitamos saber cuantas letras hay dentro del array, usamos el atributo "length"
const numeroDeLetras = letrasSecuenciaOficial.length

// esta funcion se ocupa con coger el DNI entrado y devolver la parte numerica (o mejor dicho todos los caracteres menos el ultimo)
function obtenerDNINumeros () {
  const inputDNI = document.getElementById('dni')
  // creamos una constante para guardad el valor del elemento inputDNI
  const inputDNIValor = inputDNI.value
  // tenemos que sacar del DNI que nos han pasado la parte numerica
  const inputDNINumeros = inputDNIValor.slice(0, inputDNIValor.length - 1)
  // la devolvemos
  return inputDNINumeros
}

// coge la string entrada por el usuario, saca el ultimo caracter y lo devuelve
function obtenerDNILetra () {
  const inputDNI = document.getElementById('dni')
  // creamos una constante para guardad el valor del elemento inputDNI
  const inputDNIValor = inputDNI.value
  // sacamos el ultimo caracter del string proporcionado mediante el metodo charAt
  const inputDNILetra = inputDNIValor.charAt(inputDNIValor.length - 1)
  // devolvemos la letra proporcionada por el usuario
  return inputDNILetra
}

// al averiguar el modulo, es decir el resto entero despues de dividir el numero del DNI por el numero de letras en el array,
// nos da un numero que coincide con la posicion (su indice) de la letra en el array, lo buscamos y devolvemos
function calcularLetraDNI (numerosDelDNI) {
  var modulo = numerosDelDNI % numeroDeLetras
  var letraDNICorrecta = letrasSecuenciaOficial[modulo]
  console.log(letraDNICorrecta)
  return letraDNICorrecta
}

// esta es la funcion que al hacer click encima del boton,
// llama las dos funciones auxiliares y luego compara si la letra proporcionada
// en el input es la misma que la calculada por nuestra logica, segun el resultado,
// se modifica el contenido del elemento HTML donde se muestra el texto adecuado
function comprobarLetraDNI () {
  const letraDelUsuario = obtenerDNILetra()
  const numerosDelUsuario = obtenerDNINumeros()
  if (calcularLetraDNI(numerosDelUsuario) === letraDelUsuario) {
    outputConfirmacionDNI.innerHTML = 'CORRECTO'
  } else {
    outputConfirmacionDNI.innerHTML = 'INCORRECTO'
  }
}
