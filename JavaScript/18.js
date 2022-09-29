function sumar(x = 0, y = 0){ // Parametros dentro de parentesis
    console.log(x * y);
}

// Cuando definimos en los parentesis se le llama parametros por default.

sumar();// Aca paso los argumentos
sumar(2,2);
sumar(1);

const sumar2 = function(x = 0, y = 0){
    console.log(x + y);
}

sumar2(4, 4);