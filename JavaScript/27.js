// POO

// Object Literal es fijo porque nosotrso le asignamos los elementos y sus valores 

const producto = {
    nombre: 'Tablet',
    precio: 200
}

console.log(producto);

//Object Construcotr es dinamico porque se le va asignando los valores automaticamente

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
const producto2 = new Producto('Monitor HD', 800);
const producto3 = new Producto('Monitor 4k', 10000);

function FormatearProductos(producto){//Esta es una forma de mostrar
    return `El producto ${producto.nombre} tiene un valor de: $ ${producto.precio}`;
}
// Prototypes nos va a dejar crear funciones que solo se utilizan en un objeto en especifico.

Producto.prototype.FormatearProductos = function(){//Esta es la forma de mostar utilizando prototypes
    return `El producto ${producto.nombre} tiene un valor de: $ ${producto.precio}`
}

console.log(producto2);

console.log(FormatearProductos(producto2));

console.log(producto3.FormatearProductos());

