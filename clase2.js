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




















