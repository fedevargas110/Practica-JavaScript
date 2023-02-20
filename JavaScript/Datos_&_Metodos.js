// Tipos de Datos

let producto = 'Monitor HD 4 pulgadas'; // Tipo String y sus diferentes formas de escribirlas.
let producto2 = String('Monitor HD 4 pulgadas');
let producto3 = new String('Monitor HD 4 pulgadas');
let producto4 = 'Monitor que tiene varios colores y no se q mas';

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4.length) //se le dnomina funcion y cuando le ponemos un .y despues algo se le denomina metodo.

// Metodos
//length es para saber la extencion del string
//indexOF es para encontrar la posicion de una palabra dentro de un string sin cntar espacios
//include es para saber si se encuentra la palabra devolviendo un true o false

console.log(producto.indexOf('HD'));
console.log(producto.includes('HD'));
console.log(producto.includes('papa'));