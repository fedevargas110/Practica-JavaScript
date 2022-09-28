// Arrays siempre entre corchetes

const numeros = [10, 20, 30, 40]


const meses = new Array('Enero', 'Febrero', 'Marzo'); // Cuando crearms uno nuevo es entre parentesis
console.table(meses);

const arreglo = ['Enero', 10, null, true, {gato: 'mora', apellido: 'mishi'}, [50, 30]]; // Puede contener todo tipo de valor adentro de un array
console.table(arreglo);

// Como accedemos a un valo de un array

console.log(arreglo[4]);

// Conocer la extencion de un array

console.log(meses.length);

//Todo arreglo tiene su iterador for Each (por cada uno de ellos)

numeros.forEach(function(numero){ 
    console.log(numero);
})

// Como agregar valores de un arreglo al final

numeros.push(50,70,90);

// Como agregar valores al principio de un arreglo

numeros.unshift(-10,-20);

numeros.pop(); // Elimina al final del arreglo
numeros.shift(); // Elimina al principio del arreglo
numeros.splice(2, 1); // Reorre el arreglo y el primer valor hace reerencia al indice del valor en el arreglo al cual queremos eliminar y el segundo valor a cuants valores a partir de ese queremos eliminar

console.table(numeros); // Te lo muestra mejor a los arrays

//Hoy en dia no se recomiendo modificar el array original.
const nuevoArreglo = [...meses, 'Junio'] // hace referencia al .push
const nuevoArreglo2 = ['Junio', ...meses] // hace referencia al .unshift