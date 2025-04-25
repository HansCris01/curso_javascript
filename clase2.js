//nos quedamos en 2:48:34

//for con of

let animales = ["gato", "perro", "tiranosaurio ex"];

for (animal in animales){
	console.log(animal);
}

//Diferencia entre un for in vs un for of

let planetas = ["Tierra", "Mercurio", "Venus", "Marte"];
planetas.nombre = "Planetas";

for (planeta in planetas){
	console.log(planeta); //te muestra las indexables hasta el nuevo que se agrego
}

for (planeta of planetas){
	console.log(planeta); //te muestra la información pero no te muestra el nuevo que agregas que es planeta
}


//label nos permite asociar ejemplo:

array1 = ["María", "Josefa", "Roberta"];
array2 = ["Pedro", "Marcela", array1, "Sara"];

forAlumnos:
for (let array in array2){
	if(array == 2){

		for (let array of array1){
			break forAlumnos; //me permite parar el bucle en el for general
                        //break; //cierra hasta el array 2
			document.write(array + "<br>");
		}

	   }else{
		document.write(array2[array] + "<br>");
	}
}

/*Funciones
   Definicion y usos
   Formas de crear funciones (y llamarlas)
   return
   funciones flecha
*/

function saludar(){
	let respuesta = prompt("¡Hola! ¿Como fue tu día?");
	if (respuesta == "bien"){
		alert("me alegro");
	} else {
		alert("una pena")
	}
}


saludar(); //aquí ejecuto la función

//funcion con retorno

function saludar() {
  console.log('Hola');
  return 'retornando la funcion';
}

let saludo = saludar();

console.log(saludo);

//funcion con parametros

function suma(num1, num2){
	let res = num1 + num2;
	return res;
}
let resultado = suma(2,2);

console.log(resultado);

function saludar(nombre){
	let frase = `¡Hola ${nombre}! ¿Como estas?`;
	return frase;
}

let resultado = saludar("Hans");

console.log(resultado); 


//otra forma crear la función, pero funciona exac

const saludar = function(nombre){
	let frase = `¡Hola ${nombre}! ¿Como estás?`;
	return frase;
}

let resultado = saludar("Hans");

console.log(resultado);

//Otra forma de crear funcion

const saludar = (nombre)=>{
	let frase = `¡Hola ${nombre}! ¿Como estás?`;
	return frase;
}

let resultado = saludar("Sara");
console.log(resultado);

/*
POO --> Programacion orientada a objetos 

_ Definicion
_ Ejemplos
_ Instanciacion

Conceptos básicos de POO 

_ clase
_ objeto
_ atributo
_ metodo
_ constructor

Caracteristica de la POO
_ abstraccion
_ modularidad
_ jerarquia

Otros conceptos de POO
_ Polimorfismo
_ Herencia

Otros conceptos de POO
_ Encapsulamiento

*/

//vamos a crear un objeto en un archivo nuevo de javascript


class computadora {
	constructor(procesador, memoriaRam, tarjetaVideo, memoriaAlmacenamiento){
		this.procesador = procesador;
		this.memoriaRam = memoriaRam;
		this.tarjetaVideo = tarjetaVideo;
		this.memoriaAlmacenamiento = memoriaAlmacenamiento;	
		this.informacion = `Computadora ${procesador} con memoria ram de ${memoriaRam}, disco solido ${memoriaAlmacenamiento} y una tarjeta de video ${tarjetaVideo} de regalo`;
	}
}

let ordenador = new computadora("Core I7","32GB DRR4","Nvidia Gforce", "1TB");
//tambien podemos crear más computadoras con diferente información
let ordenador2 = new computadora("rayzen","16GB DRR4","Ati Radeon", "2TB");


console.log(ordenador);

//acceder a las propiedades 

console.log(ordenador.procesador);
console.log(ordenador.informacion);

console.log(ordenador2.informacion);

//4:17:48 nos quedamos en objetos


















































