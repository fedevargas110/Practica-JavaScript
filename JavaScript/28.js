//Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} sale: $${this.precio}`
    }

    getPrecio(){
        return `el precio ${this.precio}`
    }
}

const producto2 = new Producto('Monitor Curvo', 300);
// Herencia con extends
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);// hace referencia a los elements de la clase padre.
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`
    }
}

const libro = new Libro('Harry Popoter', 120, '8567463131');

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto2.getPrecio());
console.log(libro);
console.log(libro.formatearProducto());