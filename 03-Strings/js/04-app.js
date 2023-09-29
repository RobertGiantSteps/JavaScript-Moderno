const producto = '                  Monitor 20 Pulgadas             ';

console.log(producto.length);

// Eliminar espacios del inicio ....

console.log(producto.trimStart());

// Eliminar espacios al final ...

console.log(producto.trimEnd());

// Para usar estos métodos de forma encadenada.

console.log(producto.trimStart().trimEnd()); 

// Cuando es necesario eliminar en ambas direcciones se usa solo trim

console.log(producto.trim());