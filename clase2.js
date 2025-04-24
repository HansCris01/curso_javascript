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
	console.log(planeta);
}

for (planeta of planetas){
	console.log(planeta);
}






















