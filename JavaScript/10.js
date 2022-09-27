// Objetos

const nombreProducto = 'Monitor Benq 144 Ghz';
const precio = 400;
const disponible = true;

console.log(nombreProducto);
console.log(precio);
console.log(disponible);

// Se puede crear lo mismo pero dentro de un objeto

const producto = {
    nombreProducto : 'Monitor Benq 144 Ghz',
    precio : 400,
    disponible : true
}

console.log(producto);

// Para acceder a un elemento del objeto en especifico en consola ponemos objeto.elemento 

console.log(producto.nombreProducto);// esta se utiliza mas

// Otra sintaxis para acceder es:

console.log(producto['nombreProducto']);

// Agregando nuevos elementos al objeto

producto.imagen = 'imagen.jpg';

// Eliminando elementos del objeto

delete producto.disponible;

console.log(producto);





