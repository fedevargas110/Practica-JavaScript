// For Loop lleva un indice, seguido de la condicion, y el incremento de este indice.

for(let i = 1; i<11; i++){
    console.log(i);
}

//Busar los numeros par e impar

for(let i = 1; i<11; i++){
    if(i % 2===0){
        console.log(`El numero ${i} es PAR`);
    }
    else{
        console.log(`El numero ${i} es IMPAR`);
    }
}

//Implementando un for en un arreglo

const carrito = [
    {nombre: 'Monitor 20"', precio: 400},
    {nombre: 'Audifonos Razer 280ti', precio: 200},
    {nombre: 'Teclado', precio: 40},
    {nombre: 'Mouse', precio: 70},
    {nombre: 'Tablet Apple', precio: 550}
]

for(let i = 0; i<carrito.length; i++){
    console.log(carrito[i].nombre);
}



//While Loop es parecida la sintaxis del for pero es mientras la condicion sea verdadera

let i = 0;

//while(i < 11){
//    console.log(i);
//    i++;
//}



//Numeros par e Impares con while

//while(i < 11){
//    if(i%2===0){
//        console.log(`El numero ${i} es PAR`);
//    }
//    else{
//        console.log(`El numero ${i} es IMPAR`)
//    }
    
//    i++;
//}


//While para iterar un arreglo

//while(i < carrito.length){
//    console.log(carrito[i].nombre)
//    i++;
//}



//Do while Loop la diferencia con while es que este ejeuta el codigo al menos una vez y luego ealua si la condicion es verdadera.


do{
    console.log(i);
    i++;
}while(i<10);