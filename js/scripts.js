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


//------------------Eventos
// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el Js y los archios que dependen del HTML esten listos
//     console.log(2);

// });

// window.onload=function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ //Solamente espera a que se descargue HTML, pero no espera a CSS o imagenes.
//     console.log(4);
// });

// console.log(5);

// window.onscroll=function(){
//     console.log('scrolling..');
// }

//Seleccionar elementos y asociarles un evento

        // const btnEnviar = document.querySelector('.boton--primario');
        // btnEnviar.addEventListener('click', function(event){
        //     console.log(event);
        //     event.preventDefault();
        //     console.log('Enviando formulario');
        // });
//-------- Evento de Submit
const formulario = document.querySelector('.formulario');
const nombre= document.querySelector('#nombre');
const email= document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');
//Es diferente el evento submit al evento de click, el evento de click se puede hacer hacia cualquier cosa y submit solo en los formularios o cuando se manda informacion
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    
    //Validar el fromulario
    const {nombre, email, mensaje}= datos;

    if(nombre==='' || email==='' || mensaje===''){
        //console.log('Todos los campos son obligatorios');
        mostrarError('Todos los campos son obligatorios');

        return; //corta la ejecucion del codigo
    }else{
        mostrarCorrecto('Se ha enviado el formulario');
    }
    
    //enviar el formulario
    
    
    console.log('Enviando formulario');
});

//Eventos de los inputs y textareas

const datos={
    nombre:'',
    email:'',
    mensaje:''
};


//Change manda la accion en cuanto se sale del cuadro de input, sin embargo, 'input' es en tiempo real, va mandando en seguida se teclea.
// nombre.addEventListener('input', function(e){
//     console.log(e.target.value);
    //---------Con la linea de arriba vemos inmediatamente en frase lo que esta escrito en el input.
// });
// email.addEventListener('input', function(e){
//     console.log(e.target.value);
// });
// mensaje.addEventListener('input', function(e){
//     console.log(e.target.value);
// });

//Linea mas optimizada 
    nombre.addEventListener('input', leerTexto);
    email.addEventListener('input', leerTexto);
    mensaje.addEventListener('input', leerTexto);

function leerTexto(e){
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    
}

function mostrarError(mensaje){
    const error =document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaoarezca despues de 1 segundos
    setTimeout(()=>{
        error.remove();
    }, 5000);
}

//Mostrar que se enviaron los datos del formulario
function mostrarCorrecto(mensaje){
    const correcto =document.createElement('P'); //Agregamos el elemento <p>
    correcto.textContent = mensaje; //El contenido de este sera igual a un mensaje
    correcto.classList.add('correcto'); //agregamos la clase 'correcto'

    formulario.appendChild(correcto); //inserta el objeto al documento html

    //Desaoarezca despues de 1 segundos
    setTimeout(()=>{
        correcto.remove();
    }, 5000);
}

