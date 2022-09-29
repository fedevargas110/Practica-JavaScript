// Arrow Functions solo se utiliza en variables que se definen funcion, no lleva llaves y no lleva la palabra function y se caracteriza con =>
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(1, 1);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo: ${tecnologia}`);

aprendiendo('JavaScript');


// Conirtiendo toas las funciones en arrow functions

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; // Arreglo unidimensional plano.

const carrito = [
    {nombre: 'Monitor 20"', precio: 400},
    {nombre: 'Audifonos"', precio: 200},
    {nombre: 'Teclado', precio: 40},
    {nombre: 'Mouse', precio: 70},
    {nombre: 'Tablet Apple', precio: 550}
]

// forEach

meses.forEach(mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si esta')
    }
});

let resultado;

// Para arreglos con objetos se utiliza Some

resultado = carrito.some(producto=> producto.nombre == 'Teclado');


// Reduce para calcular el total de algo

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

// Filter por lo que yo quiera

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);
