// Uniendo dos objetos con Spread Operator

const producto = {
    nombreProducto : 'Monitor Benq 144 Ghz',
    precio : 400,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

// No queremos modificar los originales pero si crear uno nuevo con ambos.

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);