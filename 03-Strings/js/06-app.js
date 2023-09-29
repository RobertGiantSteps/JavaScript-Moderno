const producto = 'Monitor 20 Pulgadas ';

// .repeat permite repetir una cadena de texto ...


// const text = 'En Promoción '.repeat(2.4); esto lo redondea y repite 2 veces
const text = 'En Promoción '.repeat(3);

console.log(text);

// Con String Template

console.log(`${producto} en ${text} !!!!`);


// Split, permite dividir un String

const activity = "Estoy aprendiendo JavaScript Moderno";
console.log(activity.split(" "));

const hobbies = "Leer, caminar, Aprender a programar, tocar saxo";
console.log(hobbies.split(','));

const  tweet = "Aprendiendo JavaScript Moderno #JSModernoConJuan";
console.log(tweet.split('#'));

