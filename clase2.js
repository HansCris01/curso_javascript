
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

//--------Método cadena 5:13:05 ---------
/*
_ concat() --> junta a dos cadenas

_ startsWith() --> Si una cadena comienza con los caracteres de otra cadena, devuelve true, si no devuelve false.
_ endsWith() --> Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
_ includes() --> Si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no devuelve false.
_ indexOf() --> Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
_ lastIndexOf() 

_ padStart()[propuesta de Estandar] --> rellenar cadena al principio
_ padEnd() [propuesta de ECMA] --> Rellenar cadena al final con los caracteres
_ repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos 


_ split() --> Divide la cadena
_ substring() --> No da un pedazo del texto seleccionado
_ toLowerCase() --> Convierte el texto a minúscula
_ toUpperCase() --> Convierte el texto a mayúscula
_ toString() --> método devuelve una cadena que representa el objeto especificado  
_ trim() --> elimina los especios en el blanco al principio y al final de una cadena.
_ TrimEnd()
_ TrimStart()
_ valueOf() 


*/

let cadena = "cadena de prueba"; //vamos a usar esta variable para hacerle de todo

//aplicar cada metodo cadena 

//concat()

resultado = cadena.concat("512");
console.log(resultado);

//nos quedamos en 5:15:58

//ejemplo 2 con concat()

let texto = "Hola ";
let cadena = new String(texto);
let cadena2 = "amigo como estas hoy?";

resultado = cadena.concat(cadena2);

console.log(resultado);

//Ejemplo con startsWith() te permite validar
//si la palabra esta en la otra cadena en la inicial
//danto como resultado true o false

let cadena = "cadena prueba";
let cadena2 = "cadena";

resultados = cadena.startsWith(cadena2);

console.log(resultados);

//Ejemplo con endsWith() si termina con la palabra 
//de busqueda me dara true pero si la palabra final
//es diferente dara false 

let cadena = "cadena prueba";
let cadena2 = "cadena";

resultados = cadena.endsWith(cadena2);

console.log(resultados);

//ejemplo con includes() si incluye la palabra
//dara verdadero

let cadena = "cadena prueba";
let cadena2 = "cadena";

resultados = cadena.includes(cadena2);

console.log(resultados);

//ejemplo con indexOf() te dice en números cuantos 
//indices recorrio para llegar a la palabra de busqueda

let cadena = "cadena prueba";
let cadena2 = "prueba";

resultados = cadena.indexOf(cadena2);

console.log(resultados);

//Ejemplo con padStart te dice en números cuantos 
//indices recorrio para llegar a las palabras iguales
//en la busqueda

let cadena = "cadena prueba prueba";
let cadena2 = "prueba";

resultados = cadena.lastIndexOf(cadena2);

console.log(resultados);

//Ejemplo con padStart()


let cadena = "abc";

resultados = cadena.padStart(6,"a");

console.log(resultados);

//ejemplo con padEnd()

let cadena = "abc";

resultados = cadena.padEnd(10,"1234");

console.log(resultados);


//Método array 5:42:48



