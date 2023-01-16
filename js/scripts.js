//Introduccion a DOM
//querySelector
// Va a retornar ninguno o hasta un elemento que concuerde con el selector que estas escribiendo.

const heading = document.querySelector(".header__texto h2"); //Retorna 0 o un elementos
heading.textContent = "Nuevo heading";


console.log(heading);

//querySelectorAll: retorna 0 si no hay elemento o retorna todos los elementos que concuerdan.

const enlaces = document.querySelectorAll(".navegacion a");

console.log(enlaces[0]);

enlaces[0].textContent = "nuevo texto para enlace";
// enlaces[0].classList.remove('navegacion__enlace');


//getElementById
//Este es un forma vieja que ya no se usa muy seguido en javascript

// const heading2 = document.getElementById("heading");
// console.log(heading2);

//Generar nuevo enlace.

const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el text
nuevoEnlace.textContent = 'Un nuevo enlace';
 
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion=document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos
console.log(1);

window.addEventListener('load', function(){ //load espera a que el Js y los archios que dependen del HTML esten listos
    console.log(2);

});

window.onload=function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //Solamente espera a que se descargue HTML, pero no espera a CSS o imagenes.
    console.log(4);
});

console.log(5);

window.onscroll=function(){
    console.log('scrolling..');
}

//Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(event){
    console.log(event);
    event.preventDefault();
    console.log('Enviando formulario');
})