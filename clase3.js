//Método array
/*
     pop() método pop nos sirve para sacar el último elemento y mostrar el último elemento borrado
     shift() método shift elimina el primer elemento y muestra el primer elemento eliminado 
	 push() push agrega un elemento al final del array
	 reverse() reverse invierte los elementos del array
	 unshift() unshift agrega uno o más elementos al principio del array
	 sort() sort este metodo te ayuda ordenar la lista
     splice() splice nos ayuda eliminar elementos según su posición	 
*/

//metodo pop nos sirve para sacar el último elemento y mostrar el último elemento borrado 

let planetas = ["mercurio","venus","tierra","marte"];

let result = planetas.pop();

console.log(result);
console.log(planetas);

//metodo shift elimina el primer elemento y muestra el primer elemento eliminado 

let planetas = ["mercurio","venus","tierra","marte"];

let result = planetas.shift();

console.log(result);
console.log(planetas);


//push agrega un elemento al final del array

let planetas = ["mercurio","venus","tierra","marte"];

let result = planetas.push("Jupiter");

console.log(planetas);

//reverse invierte los elementos del array

let planetas = ["mercurio","venus","tierra","marte"];

let result = planetas.reverse();

console.log(planetas);
//unshift agrega uno o más elementos al principio del array

let planetas = ["tierra","marte"];

planetas.unshift("mercurio", "venus");

console.log(planetas);

//sort este metodo te ayuda ordenar la lista

let numeros = [1,5,2,4,7,3,6];

numeros.sort();

console.log(numeros);

//splice nos ayuda eliminar elementos según su posición
               //     0       1       2       3 
let planetas = ["mercurio","venus","tierra","marte"];
        //inicio  indicas eliminar 2 elementos
planetas.splice(0, 2);

console.log(planetas);

/*    
   Objecto Math - básico
   
   sqrt()
   cbrt()
   max()
   min()
   random()
   fround()
   floor()
   trunc()   

   __propiedades__  --> No es necesario
   
   pi
   sqrt1_2 
   sqrt2
   
   E
   LN2
   LN10
   lOG10E

*/


//sqrt --> sirve para sacar la raíz cuadrada

numero = Math.sqrt(25);
console.log(numero);

//cbrt --> sirve para sacar la raíz cúbica

numero = Math.cbrt(27);
console.log(numero);

//max --> saca el máximo numero

numero = Math.max(4,5,3,65,6,7,90,23,111,34);
console.log(numero);

//min --> saca el mínimo numero

numero = Math.min(4,5,3,65,6,7,90,23,111,34);
console.log(numero);

//random --> devuelve número pseudo aleatorio, siginifica que nunca llegará a 0 y 1, siempre va ser decimal

numero = Math.random(4,5,3,65,6,7,90,23,111,34);
console.log(numero);

/*

Console

Para acceder a la consola debes usar el f12 

Con eso podremos ejecutar codigo javascript en linea

*/

//desde la consola puedo hacer impresiones

document.write("Hola");

alert("Hola");

let name = "Jose";

/*

------------- Método de registro console --------------

assert() --> ya no se usa
clear()
error()
info()
log()
table()
warn()
dir() --> ya no se usa

*/

//assert me sirve para validar y dar mensaje de error 

console.assert(4 > 7);

//clear sirve para limpiar la consola 

console.clear();

//error personalizado con mensaje

console.error("Tienes un error");

//info te sirve para mostrar un mensaje personalizado pero no es ningun error

console.info("Cerrando conexion");


/*
------------ Método de conteo en console --------------

count()
countReset()

*/

//count  te dice cuantas veces ejecutastes esa función

console.count();
console.count();
console.count();
console.count();

//count reset lo que hace es resetear
console.count();
console.count();
console.count();
console.count();


console.countReset(); //lo reinicia  contando desde 1 con el count de abajo
console.count();


/*
------------ Método de agrupación en console --------------

group()
groupEnd()
groupCollapsed()

*/

//group nos sirve para crear grupos en la consola f12

console.group();
console.log("hola");
console.log("como estas?");

//groupEnd() Finaliza el grupo

console.groupEnd(); 

//groupCollapsed --> empieza con el grupo cerrado

console.groupCollapsed("hola");


/*
------------Método de temporización---------

time()
tiemEnd()
timeLog()

*/

//time() inicia una temporización dando un contador

console.time();
console.timeLog();


//timeEnd() finaliza tiempo
console.time();
console.timeEnd();


//timeLog() ve el tiempo

console.time();
console.timeLog();

//ejemplo de implementacion 

console.time();

function sumar(a,b){
	sumar = a + b;
	return sumar;
	console.timeLog(); //con eso vemos cuanto se tarda en esta función
}

console.log(sumar(34,50000000000));

console.timeEnd();


/*

  ------DOM-----

El DOM es el document Object model hace referencia los 
elementos que esta dentro una página web

Para acceder a esto debemos entrar con F12 en el Navegador

*/

/*

<!DOCTYPE html>
<html>
<head>
   <title>Tercera clase de JavaScript</title>
  
<script src="animal.js"></script>  


</head>    
   <body>
     
   <h1>Bienvenido a la clinica veterinaria</h1>
    
   </body>

</html>


*/

//tiempo 07:50:00












