// Object Methods

const producto = {
    nombreProducto : 'Monitor Benq 144 Ghz',
    precio : 400,
    disponible : true
}


Object.freeze(producto); // No permite ni agregar ni borrar elementos
Object.seal(producto); // No te permite ni agregar ni borrar PERO SI MODFICAR LOS VALORES DE LOS ELEMENTOS

producto.imagen = 'imagen.jpg';

producto.precio = 500;

console.log(producto);

// 'use strict' correr JS en modo estricto