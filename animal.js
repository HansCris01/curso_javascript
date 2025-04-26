class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} years y soy de color ${this.color}`;
	}
	verInfo(){
		document.write(this.info + "<br>");
	}
	ladrar(){
		if (this.especie == "perro"){
			document.write("Gua <br>");
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

//perro.rugido();
//gato.verInfo();
//pajaro.verInfo();


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

//aplicando get y set
class Perro extends animal{
	constructor(especie, edad, color, raza){ //vamos agregar raza
		super(especie,edad, color);
		this.raza = null;
	}
	set setRaza(newName){
		this.raza = newName;
	}
	
	get getRaza(){
		return this.raza;
	}
}

const perro2 = new Perro("perro","blanco");
perro2.setRaza = "Bomerman";
document.write(perro2.getRaza);









