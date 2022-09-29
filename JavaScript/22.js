// Estructuras de control

// un = estamos defniendo, == estamos comparando, === estamos mas estrictamente comparando, !== si es desigual.
const pun = 140;

if(pun === 10){
    console.log('El puntaje es 10');
}else{
    console.log('El puntaje no es 10');
}

// > mayor q, < menor q
const efectivo = 100;
const carrito = 850;

if(efectivo > carrito){
    console.log('El usuario puede pagar')
}else{
    console.log('Fondos Insuficientes')
}

const rol = 'puc';

if (rol === 'admin'){
    console.log('Tienes acceso full');
}else if( rol === 'puchero'){
    console.log('No tienes acceco a full');
}else{
    console.log('Anda a cagar puto');
}
