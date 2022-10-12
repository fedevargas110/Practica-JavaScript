//Promises en JS

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); // El promise se cumple
    }else{
        reject('No se pudo iniciar sesion'); // El promise no se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then( resultado => console.log(resultado)) 
    .catch(error => console.log(error))

// EN los Promises existen 3 valores:
// Pending: No se a cumplido, pero tampoco rechazado.
// Fulfilled: Ya se cumplio.
// Rejected: Se ha rechazado o no se pudo cumplir.