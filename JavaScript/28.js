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

console.log(producto2);
console.log(producto2.getPrecio());