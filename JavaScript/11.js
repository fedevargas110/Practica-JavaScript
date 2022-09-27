//  Destructuring de Objetos

const producto = {
    nombreProducto : 'Monitor Benq 144 Ghz',
    precio : 400,
    disponible : true
}

// lo que se hace es extraer el elemento, crear una variable y mostrar su valor.

const {precio} = producto;
const {nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);