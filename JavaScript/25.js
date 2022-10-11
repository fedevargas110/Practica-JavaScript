// ForEach and Map Loops se ejecutan unicamente en arreglos


const carrito = [
    {nombre: 'Monitor 20"', precio: 400},
    {nombre: 'Audifonos Razer 280ti', precio: 200},
    {nombre: 'Teclado', precio: 40},
    {nombre: 'Mouse', precio: 70},
    {nombre: 'Tablet Apple', precio: 550}
]

carrito.forEach(function(producto){ // Se va a ejecutar tantas veces como elementos haya dentro del arreglo
    console.log(producto);
});

carrito.map(function(producto){ // Se va a ejecutar tantas veces como elementos haya dentro del arreglo
    console.log(producto);
});

// forEach lo vamos a utilizar cuando querrmos iterar un arreglo y mandar los valores directo a consola o pantalla
//Map lo vamos a utilizar cuando ceamos un nuevo arreglo.

arreglo1 = carrito.forEach(producto => producto.nombre);
arreglo2 = carrito.map(producto => producto.nombre);

console.log(arreglo1);
console.log(arreglo2);