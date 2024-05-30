'use strict';

const inputProduct = document.querySelector('.js-product');
const inputQuantity = document.querySelector('.js-quantity');
const inputPrice = document.querySelector('.js-price');
const btn = document.querySelector('.js-btn');
const ul = document.querySelector('.js-ul');
const result = document.querySelector('.js-result');
const cantidad = document.querySelector('js-cantidad');

let total = 0; //Añadimos -let porque va a ir cambiando


btn.addEventListener('click', (ev) => {
    ev.preventDefault(); 
    const valueProduct = inputProduct.value;
    const valuePrice = parseFloat(inputPrice.value); 
    const valueQuantity = parseInt(inputQuantity.value);
    const valueQuantitytotal = valueQuantity * valuePrice;
  

    ul.innerHTML += `<li> ${valueProduct} - ${valueQuantitytotal}</li>`; // += (acumular)

    //Modificar la variable total, con la suma de todo a pagar.
    total = total + valueQuantitytotal ;
    result.innerHTML = total;
});


























// const student = 'Isa';
// const student2 = 'ana';

// //Dos soluciones hechas de diferente forma:
// console.log('Bienvenida ' + student + ' y ' + student2)

// console.log(`bienvenida ${student} y ${student2}`); //Comillas francesas!! Sirven para meter variables de JavaScript


// const section = document.querySelector('.js-section');
// section.innerHTML = `<p> Bienvenida ${student} y ${student2} </p>`;
