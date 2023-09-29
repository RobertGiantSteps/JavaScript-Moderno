// Formas de concatenar Strings

const producto = 'Monitor 20 Pulgadas';
const precio = ' 30 USD';

// 1º Forma
console.log(producto.concat(precio));
console.log(producto.concat(' En descuento en este momento'));

// 2º Forma
console.log(producto + ' Con un precio de:' + precio);

console.log('El produto ' + producto + ' tiene un precio de:' + precio);

// Otra Forma similar a la anterior 

console.log('El produto ' , producto , ' tiene un precio de:' , precio);


// Template Strings

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);