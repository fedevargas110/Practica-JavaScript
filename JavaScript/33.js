// Fetch API permite obtener info de un servidor al igual que AJAX
//JSON javascript Object Notation

async function obtenerEmpleados(){

    const archivo = 'empleados.json';

 //   fetch(archivo)
 //       .then(resultado => {
 //           return resultado.json();
 //       })
 //       .then (datos => {
 //           console.log(datos);
 //       })

    // Mismo resultado pero con async / await

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
};


obtenerEmpleados();