/*
 Métodos de selección de elementos
 
 document.getElementById() --> selecciona un elemento por ID
 document.getElementsByTagName() --> selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica
 document.querySelector() --> Devuelve el primer elemento que coincidan con el grupo especifico de selector
 document.querySelectorAll() --> Devuelve todos los elementos que coincidan con el grupo especifico de selectores.
 
*/

//vamos a escribir codigo html para las etiquetas p con los id 

texto = document.getElementById("texto");
texto2 = document.getElementsByTagName("p"); //sirve para seleccionar etiqueta <p> pero no es recomendable ya que es especifico

console.log(texto2[0]);
console.log(texto);

//document.querySelector()

selector = document.querySelector("#texto2"); //seleccionar selector
console.log(selector);

// document.querySelectorAll() --> selecciona todos los elementos de etiqueta <p>

selector = document.querySelectorAll("p"); //seleccionar selector
console.log(selector);


/* 
  ---------- Métodos de atributos de un elemento -----------
  
  setAttribute() - Modifica el valor de un atributo
  getAttribute() - obtiene el valor de un atributo
  removeAttribute() - Remueve el valor de un atributo
  
*/

//vamos el documento html 

//vamos a crear los input type="text"

//nos quedamos en 8:00:45

const rangoEtario = document.querySelector(".rangoEtario");

//vamos obtener para modificar el elemento

rangoEtario.setAttribute("type","number"); //con eso modificanos el type del elemento

//vamos a obtener el atributo

document.write(rangoEtario.getAttribute("type")); //obtienes el tipo de atributo

/* 8:07:29

  Atributos globales	
  
  > contenteditable - indica si el elemento puede ser modificable por el usuario(bool). 
  > dir - indica la direccionalidad del texto. 
  > hidden - indica si el elemento aún no es, o ya no es, relevante.
  > style - continue declaraciones de estilo css para ser aplicadas al elemento. 
  > tabindex - indica si el elemento puede obtener un focus de input.
  > title - contiene un texto con información relacionada al elemento al que pertenece.
  
*/

//contenteditable
//vamos a crear un estilo css para aplicar estilo y llamarlo a nuestra pagina web

const rangoEtario2 = document.querySelector(".titulo");

rangoEtario2.setAttribute("contenteditable", "true"); //con eso podre editar el atributo html
                                              //true edita
                                              //false no permite editar


//dir 

const titulo2 = document.querySelector(".titulo2");

//titulo2.setAttribute("dir","ltr"); //posición de texto a la izaquiera 
//titulo2.setAttribute("dir","rtl"); //posición de texto a la derecha
titulo2.setAttribute("hidden", "true"); //oculta el texto


const titulo3 = document.querySelector(".titulo3");

titulo3.removeAttribute("hidden"); //quita el hidden del html 


//tabindex

const titulo4 = document.querySelector(".titulo4");
//titulo4.setAttribute("tabindex","0"); //es para tener un focus al presionar el teclado tab
titulo4.setAttribute("title","jajajaja"); //le agregamos titulo, al mover el mouse donde esta el texto4 vas a ver el nombre del titulo











