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

var concatenar = nombre2 + apellido_paterno2;   //No es recomendable si son letras 

console.log(concatenar);

//concatenar con concat
 
var concocatenar_concat = nombre2.concat(apellido_paterno2); // Esto si es recomendable porque es letra

alert(concocatenar_concat);
//otra forma de concatenar pero más de dos variables

//para eso vamos usar backticks ==> ``   ctrl + alt + }


frase1 = "Yo soy";
frase2 = "el mejor programador"; 

var concatenacion = `<div><h1>${frase1}</h1><br><h3>${frase2}</h3></div>`;

document.write(concatenacion);

//concatenación estatica monolitica --> no recomendable

frase = "Yo soy `Hans` y soy un Ingeniero en Sistemas";

console.log(frase);


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


/* Comparadores lógicos 


Equality (a == b) igualdad
inequality (a != b) desigualdad 
identity (a ===  b) identico
Non-identity (a !== b) no identico  
Greater than (a > b) mayor a que
Greater than or equal (a >= b) 
Less than (a < b) menor a que
Less than or equal (a <= b) menor igual


nos quedamos en 1:16:12
*/

//igualdad ejemplo:

let numero = 23;
let numero2 = 13;

document.write(numero == numero2); //al comparar con == vamos a ver que nos da false porque no son iguales

//igualdad desventaja caso 2 en caso si numero es texto

let numero = "23";
let numero2 = 23;

document.write(numero == numero2) //si nos damos cuenta esta igualdad no es estricto


//desigualdad 

let numero = 23;
let numero2 = 13;

document.write(numero != numero2); //si hay desigualdad me dara true

//identico este tipo de comparación es estricta 

let numero = "23";
let numero2 = 23;

document.write(numero === numero2) /* aquí si te dice que es falso
porque la comparación de estas dos variables uno es texto y el otro es numero */


//no identico estricto

let numero = "23";
let numero2 = 23;

document.write(numero !== numero2)/* aquí si te dice que es true
porque la comparación de estas dos variables uno es texto y el otro es numero */

//comparación de mayor

let numero = 100;
let numero2 = 50;

document.write(numero > numero2); //te va decir true 

//comparacion de mayor igual

let numero = 100;
let numero2 = 100;

document.write(numero >= numero2); //te va decir true 

//comparacion menor

let numero = 100;
let numero2 = 50;

document.write(numero < numero2); //te va decir false 

//comparacion menor igual 

let numero = 100;
let numero2 = 100;

document.write(numero <= numero2); //te va decir true 


/* Operador logico 

  AND --> y
  OR  --> o
  NOT --> negación

*/

let valor = true;
let valor2 = true;

let resultado = valor && valor2; //AND

let resultado2 = valor || valor2; //OR

let resultado3 = !valor; //NOT 

document.write(resultado);
document.write(resultado2);
document.write(resultado3);


/*camel case significa que al declarar variable empieza 
con minuscula y al medio lleva una palabra mayuscula 
o tambien métodos
*/

//ejemplo 1

primerNumero = 23;

//ejemplo 2

//parseInt()

/*  
 Condicionales 
 
 If
 else if
 Else
*/

let edad = "ddd";

if (edad >= 18) {
	alert("Usted es mayor de edad");
} else if (edad < 18){
	alert("Usted es menor de edad");
} else {
	alert("No es un número entero");
}


//1:42:42  --> continuar cuando termina el if















