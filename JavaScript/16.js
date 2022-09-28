// Funciones (instrucciones que realizan una accion)

// Declaracion de una funcion 

function sumar(){
    console.log(10 * 10);
}

sumar();// Asi se llama a la funcion

// Expresion de la funcion

const sumar2 = function(){
    console.log(2 + 1);
}

sumar2();

// IIFE no hace falta llamarlas porque se llaman solas

(function(){
    console.log('esto es una funcion');
})();

// Hostin en Java Script significa que ejecuta en dos vueltas, si en la primera funcion la llamo y despues la creo no tira error encambio en la otra no se puede
// En la primera vuelta se registran las funciones y variables y la segunda se ejecutan los codigos.