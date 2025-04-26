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


//label nos permite asociar ejemplo: --> Falto mostrar eso

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
	verInfo(){
		document.write(this.informacion + "<br>"); //--> lo nuevo
	}
}

let ordenador = new computadora("Core I7","32GB DRR4","Nvidia Gforce", "1TB");
//tambien podemos crear más computadoras con diferente información
let ordenador2 = new computadora("rayzen","16GB DRR4","Ati Radeon", "2TB"); //--> lo nuevo


console.log(ordenador);

//acceder a las propiedades 

console.log(ordenador.procesador);
console.log(ordenador.informacion);

console.log(ordenador2.informacion); //-->lo nuevo

ordenador.verInfo(); //--> lo nuevo

//4:17:48 nos quedamos en objetos
/*
  Caracteristica de la POO
  _ Abstraccion
  _ Encapsulamiento
  _ Polimorfismo
  
  
  otros conceptos de POO 
  
  _ Herencia
  _ Métodos estaticos
  _ Métodos Accesores (Getters, Setters)

*/


//Polimorfismo: significa que es la capacidad del objeto de tomar muchas formas 

class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
	ladrar(){
		if (this.especie == "perro"){
			document.write("¡Gua! <br>");
		} else {
			document.write("No puede ladrar, ya que es un " + this.especie + "<br>");
		}
	}
	
	rugido(){ //nuevo
		if (this.especie == "dinosaurio"){
			document.write("Roarrr <br>");
		} else {
			document.write("No puede decir Roarrr, ya que es un " + this.especie + "<br>");
		}
	}
	
}

let perro = new animal("perro", 5, "marrón");
let gato = new animal("gato",23,"negro");
let pajaro = new animal("pajaro",1,"verde");

perro.ladrar();
gato.verInfo();
pajaro.verInfo();


//Herencia 4:30:41 
class dino extends animal{
	constructor(especie, edad, color, raza){ //vamos agregar raza
		super(especie,edad, color);
		this.raza = raza;
		this.info2 = `Soy ${this.especie}, tengo ${this.edad} years, soy de color ${this.color} y mi raza es ${this.raza}`;
	}
	verInfo2(){
		document.write(this.info2 + "<br>");
	}
	
	//implementando static se usa cuando va heredar ese metodo
	static rugido(){
		document.write("Roarrr <br>");
	}
}

let dinosaurio = new dino("dinosaurio", 5, "marron","Teropodo tiranosaurido");

dinosaurio.verInfo2();
dinosaurio.rugido();

//set y get implementacion


class Perro extends animal{
	constructor(especie, edad, color, raza){ //vamos agregar raza
		super(especie,edad, color);
		this.raza = null;
	}
	set setRaza(newName){
		this.raza = newName;
	}
	
	get getRaza{
		return this.raza;
	}
}

const perro2 = new Perro("perro","blanco");
perro2.setRaza = "Bomerman";
document.write(perro2.getRaza);

//Método cadena 5:13:05
/*
_ concat() --> junta a dos cadenas

_ startsWith() --> Si una cadena comienza con los caracteres de otra cadena, devuelve true, si no devuelve false.
_ endsWith() --> Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
_ includes() --> Si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no devuelve false.
_ indexOf() --> devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.

_ padStart()[propuesta de Estandar] --> rellenar cadena al principio
_ padEnd() [propuesta de ECMA] --> Rellenar cadena al final con los caracteres
_ repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos 


_ split() --> Divide la cadena
_ substring() --> No da un pedazo del texto seleccionado
_ toLowerCase() --> Convierte el texto a minúscula
_ toUpperCase() --> Convierte el texto a mayúscula
_ toString() --> método devuelve una cadena que representa el objeto especificado  
_ trim() --> elimina los especios en el blanco al principio y al final de una cadena.

*/

let cadena = "cadena de prueba"; //vamos a usar esta variable para hacerle de todo

//aplicar cada metodo cadena 

//concat()

resultado = cadena.concat("512");
console.log(resultado);

//nos quedamos en 5:15:58

























