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
enlaces[0].classList.remove('navegacion__enlace');


//getElementById
//Este es un forma vieja que ya no se usa muy seguido en javascript

const heading2 = document.getElementById("heading");
console.log(heading2);


