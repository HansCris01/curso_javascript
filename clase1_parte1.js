//variables

recipiente = "papel";

//mostrar el valor de la variable

alert(recipiente);

/*
Tipo de datos:

String (cadena de texto)
number
boolean
Symbol --> es antiguo
IMG
-------------------
Casos especiales de datos: datos vacios o no existentes

Undefine
null
Nan
IMG
-----------------------
Scope
-----------------------
Hoisting
------------------------
Tipos de variable (let, var y const)
-----------------------
Crear multiples variables separado con comas:

let nombre1 = "Jorge", nombre2 = "Pedro"
--------------------------

Pruebas con Prompt

*/

string = "cadena de texto";
number = 19;
booleano = false; //si quieres poner verdadero es true

//como declarar variable esta el : var, let y const

/*

var --> declarando variable
let --> limita el alcance de la variable donde ejecutamos, solo se ejecutara dentro de su funcion
const --> variable constante, no va cambiar el valor
 
*/

//tambien podemos declarar la variable y despues inicializarla

let numero; //declara variable --> solo funciona con var y let

numero = 29; //incializa

//alert(numero);

//tambien puedo declarar las variables de manera multiple

let nombre, apellido_paterno, apellido_materno;

nombre = 'María';
apellido_paterno = 'Navarro';
apellido_materno = 'Luna';

//declarar una variable vacia de manera intencional

let caja = null;

//suma de variables

const a = 5;
const b = 4;

var suma = a + b 

console.log(suma)

//Si queremos concatenar es así:

const nombre2 = 'Laura'; 
const apellido_paterno2 = 'Guerra';

var concatenar = nombre2 + apellido_paterno2

//si quieres una notificacion que solicita un dato es así

let edad = prompt("¿Cual es su edad?");

alert("Edad: " + edad); //aquí va mostrar el dato obtenido

/* Operadores: 

_ Operadores de Asignación 
_ Operadores Ariméticos

Nos quedamos en el tiempo de: 50:04

*/




/* Operadores de asignación: Asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

Nombres                                            Abreviaciones          Significado 

Asignación                                            x = y                  x = y

Asignación de adicción                                x += y                 x = x + y

Asignación de sustracción                             x -= y                 x = x - y

Asignación de multiplicación                          x *= y                 x = x * y

Asignación de división                                x /= y                 x = x / y

Asignación de Resto                                   x %= y                 x = x % y

Asignación de exponenciación                          x **= y                x = x ** y 

Asignación de desplazamiento a la izquierda           x <<= y                x = x << y

Asignación de desplazamiento a la derecha             x >>= y                x = x >> y

Asignación sin signo de desplazamiento de la drecha   x >>>= y               x = x >>> y

Asignación AND                                        x &= y                 x = x & y

Asignación XOR                                        x ^= y                 x = x ^ y

Asignación OR                                         x |= y                 x = x | y


*/

//Ejemplo : x += y :


let numero_a = 10; 

/* Operación */  numero_a += 5;

document.write(numero_a);

//es lo mismo que escribir esto:

let operacion = numero_a + 5;

document.write(operacion);

//---------------------------//

//Ejemplo : x -= y 

let numero_b = 10; 

/* Operación */  numero_b -= 5;

document.write(numero_b);

//es lo mismo que escribir esto:

let operacion_b = numero_b - 5;

document.write(operacion_b);


//---------------------------//

//Ejemplo : x *= y 

let numero_c = 10; 

/* Operación */  numero_c *= 5;

document.write(numero_c);

//es lo mismo que escribir esto:

let operacion_c = numero_c * 5;

document.write(operacion_c);

//---------------------------//


//Ejemplo : x /= y 

let numero_d = 10; 

/* Operación */  numero_d /= 5;

document.write(numero_d);

//es lo mismo que escribir esto:

let operacion_d = numero_d / 5;

document.write(operacion_d);





/*Operadores Ariméticos que toman valores numéricos

Adición          +
Decremento       --
División         /
Potencia         **
Incremento       ++
Multiplicacion   *
porcentaje       %
resta            -
negación         -
plus             +


*/


//Ejemplo de implementación:

let suma = 5 + 4;

let decremento = 10;
decremento--;

alert(decremento)


//nos quedamos en 1:00:42 división