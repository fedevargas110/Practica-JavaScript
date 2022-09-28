// Mas Metodos para Arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']; // Arreglo unidimensional plano.

const carrito = [
    {nombre: 'Monitor 20"', precio: 400},
    {nombre: 'Audifonos"', precio: 200},
    {nombre: 'Teclado', precio: 40},
    {nombre: 'Mouse', precio: 70},
    {nombre: 'Tablet Apple', precio: 550}
]

// forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si esta')
    }
});

// Includes

let resultado = meses.includes('Marzo');// Se utiliza con arreglos planos

// Para arreglos con objetos se utiliza Some

resultado = carrito.some(function(producto){
    return producto.nombre == 'Teclado';
});

// Reduce para calcular el total de algo

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);

// Filter por lo que yo quiera

resultado = carrito.filter(function(producto) {
    return producto.precio > 400;
});

console.log(resultado);



