class computadora {
	
	constructor(procesador, memoriaRam, tarjetaVideo, memoriaAlmacenamiento){
		this.procesador = procesador;
		this.memoriaRam = memoriaRam;
		this.tarjetaVideo = tarjetaVideo;
		this.memoriaAlmacenamiento = memoriaAlmacenamiento;
		this.informacion = `Computadora en oferta ${procesador} con memoria ram de ${memoriaRam}, tarjeta de video ${tarjetaVideo} de regalo y disco duro ${memoriaAlmacenamiento}`;
	}
	verInfo(){
		document.write(this.informacion + "<br>"); //--> lo nuevo
	}
}	
	
	let ordenador = new computadora("Core i9","64 GB DRR4","Nvidia Geforce MX4000","2 TB");
	let ordenador2 = new computadora("AMD ryzen","32 GB DRR4","Ati radeon","1 TB"); //--> lo nuevo
	
	document.write(`<h1>${ordenador.informacion}</h1>`);
    ordenador2.verInfo(); // --> lo nuevo

//Java, python, etc.

//backend javascript o Java  --> microservicios
//front javascript , node js y compoente reactivo = vue, react o angular

