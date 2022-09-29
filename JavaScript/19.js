// Funciones que devuelven un valor

function sumar(n1, n2){
    return n1 + n2;
}

let resultado = sumar(2, 2);

console.log(resultado);

// Simulando un carrito de compras

let total = 0;

function carritoCompras(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = carritoCompras(200);
total = carritoCompras(200);
total = carritoCompras(600);

const totalaPagar = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar mas el 15% de impuesto es: $${totalaPagar}`);