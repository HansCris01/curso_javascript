/*
 Atributos de input

 _ className
 _ value
 _ type
 _ accept
 _ form 
 _ minlength
 _ placeholder
 _ required

*/

//vamos a conectar codigo html clase4Parte2

const input = document.querySelector(".input-normal");

document.write(input.className); //accede directamente y me da informacion de mi elemento segun lo que pida
                    // value 
                   //  type 
                   //  accept		
				   
document.write(input.type = "range");  

const archivo = document.querySelector(".archivo");
archivo.accept = "image/png"; //solo va mostrarte archivos con extensión png para seleccionar

//form para este codigo vamos a crear form en html

/*
<form id="formulario">
    <input type="text" name=""><br>
	<!-- <input type="submit" name=""> -->
 </form>
    <input type="submit" form="formulario">
 */
 
//minlength   
 
const caja1 = document.querySelector(".caja1");

//caja1.minLength = 4; //con eso te permite ingresar más de 4 carateres fijos y si es menos de 4 
//mandara una notificación

caja1.setAttribute("minlength","8"); //si quieres establecer la cantidad fija

              
/*
Atributo Style 
_ usos y ejemplos
_ propiedades camel case

*/
//recuerda que este codigo javascript esta conectado a un archivo html

const titulo = document.querySelector(".titulo");

titulo.style.color = "red";  //con eso podemos cambiar el color usando javascript
titulo.style.backgroundColor = "blue"; //cambia el color de fondo a azul --> se uso camel case


/*
 Clases, classList y Metodos de classList

 definición y usos 
  _ add() - añade una clase 
  _ remove() - remueve una clase 
  _ item() - devuelve la clase del indice especificado 
  _ contains() - verifica si ese elemento posee o no, la clase especificada.
  _ replace() - reemplaza una clase por otra
  _ toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

*/

//add() 
const titulo2 = document.querySelector(".titulo2");
titulo2.classList.add("titulo3"); //si inspeccionas en el f12 vas a ver que se agrego una nueva clase

//vamos a escribir codigo css en el archivo estilo.css para usar la nueva clase3

//remove() vamos a remover la clase

//titulo2.classList.remove("titulo3"); //con eso quitamos la clase agregada

//item 


const titulo3 = document.querySelector(".titulo3");
let valor = titulo3.classList.item(1); //va mostrar el segundo elemento de clase ya que pusistes 0
alert(valor);

//contains si la clase esta me da true

const titulo4 = document.querySelector(".titulo3");
let valor2 = titulo4.classList.contains("grandeeeeeee"); //va mostrar el segundo elemento de clase ya que pusistes 0
alert(valor2);


/*

Obtención y modificación de elementos

 textContent - devuelve el texto de cualquier nodo.
 innerText - devuelve el texto visible de un node elemento.
 outerText - devuelve el texto que da las etiquetas Html incluidas las etiquetas.
 innerHTML - devuelve el contenido Html de un elemento.
 outerHTML - devuelve el código Html completo del elemento.
 
*/

//textContent vamos a devolver lo que contiene dentro de la etiqueta 

const titulo5 = document.querySelector(".titulo5"); 
let resultado5 = titulo5.textContent;

alert(resultado5); //me va mostrar lo que contiene el titulo 5 en alerta


//innertText 
const titulo6 = document.querySelector(".titulo5"); 
let resultado6 = titulo6.innerText;

alert(resultado6); //me va mostrar lo que contiene el titulo 6 en alerta

//outerText
const titulo7 = document.querySelector(".titulo5"); 
let resultado7 = titulo7.outerText;

alert(resultado7); //me va mostrar lo que contiene el titulo 7 en alerta


//innerHTML

const titulo8 = document.querySelector(".titulo5"); 
let resultado8 = titulo8.innerHTML;

alert(resultado8);

/*

 Creación de elementos 
 
  CreateElements()
  appendChild()
  createDocumentFragment()
  
*/


//vamos usar div para llamar nuestro contenedor y agregarle elementos

const contenedor = document.querySelector(".contenedor"); //padre
const item2 = document.createElement("LI");

const textDelItem = document.createTextNode("Este es un item de la lista"); 

item2.appendChild(textDelItem); //hija

contenedor.appendChild(item2);

console.log(item2); //lo vamos a ver en la consola


//otra forma para agregar elementos a un div 

const contenedor2 = document.querySelector(".contenedor2"); //padre
const item3 = document.createElement("LI");

item3.innerHTML = "Este es un item de la lista 2"; //hija

contenedor2.appendChild(item3);

console.log(item3); //lo vamos a ver en la consola

/*

 Obtención y modificación de childs

  _ firstChild 
  _ lastChild
  _ firstElementchild
  _ childNodes
  _ children

*/

//vamos a crear un contenedor que va tener 2 hijos

const contenedor3 = document.querySelector(".conetendor3");

//const primerHijo = contenedor3.firstChild; //saca el primer nodo 
//const primerHijo = contenedor3.lastChild; //saca el segundo nodo 
//const primerHijo = contenedor3.firstElementChild; //muestra los elementos
const primerHijo = contenedor3.childNodes; //te da la lista de nodos
console.log(primerHijo);


/*

  Métodos de childs (hijos)
   
   replaceChield()
   removeChild()
   hasChildNodes()
   
*/

//vamos usar el replaceChield  para reemplazar 

/*
const contenedor4 = document.querySelector(".contenedor4");

const parrafo = document.createElement("p");
parrafo.innerHTML = "Parrafo";

const h2_nuevo = document.createElement("h2"); //este es la etiqueta
h2_nuevo.innerHTML = "Titulo 123";

const h2_antiguo = document.querySelector(".H2"); //este es el class

contenedor4.replaceChild(h2_nuevo, h2_antiguo);
*/

// vamos usar a removeChild para remover 
/*
const contenedor4 = document.querySelector(".contenedor4");

const parrafo = document.createElement("p");
parrafo.innerHTML = "Parrafo";

const h2_nuevo = document.createElement("h2"); //este es la etiqueta
h2_nuevo.innerHTML = "Titulo 123";

const h2_antiguo = document.querySelector(".H2"); //este es el class

contenedor4.removeChild(h2_antiguo); //elimino el h2_antiguo 
*/

/*

Propiedades de parents (padres)

  > parentElement --> Elige el padre node(contenedores)
  > parentNode --> Elige el padre node de un elemento 
  
  Al final los dos son lo mismo
 
*/

/*
const contenedor5 = document.querySelector(".contenedor4");
const parrafo2 = document.createElement("P").innerHTML = "Parrafo";
const h2_antiguo = document.querySelector(".H2");

console.log(h2_antiguo.parentElement); //Te manda el padre node en la consola
*/

/*

Propiedades de siblings (Hermanos)

> nextSibling
> previousSibling
> nextElementSibling
> previousElementSibling

*/

const contenedor5 = document.querySelector(".contenedor4");
const parrafo2 = document.createElement("P").innerHTML = "Parrafo";
const h2_antiguo = document.querySelector(".H2");

//console.log(h2_antiguo.nextSibling);   //te muestra los nodos
//console.log(h2_antiguo.previousSibling); //te muestra los nodos
console.log(h2_antiguo.nextElementSibling); //te muestra los elementos siguientes en ese caso es p

/*

 Nodos, una propiedad extra
  
 > closet() 

*/

const div = document.querySelector(".div-3");

console.log(div.closest(".div")); //solo nos retorna el div en la consola, solo muestra el contenedor