'use strict';

const text= document.querySelector('.js__hola');
text.innerHTML= '<p>Hola Mundo</p> ';
console.log('js__hola');

//-------------------------------------

const firstName= document.querySelector('.js__firstname');
const Tittle= document.querySelector('.js__tittle');

Tittle.innerHTML='La Adalaber seleccionada es: ' + firstName.innerHTML;
//firstName.innerHTML= '<h2>La Adalaber seleccionada es:</h2>  ';
console.log('js__firstname');