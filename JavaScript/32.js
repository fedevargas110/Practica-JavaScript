//Async / Await

function descargarNuevosClientes() {
    return new Promise ( resolve => {
        console.log('Descargando los clientes.... espere...');

        setTimeout( () => {
            resolve('Los clientes ya fueron descargados');
        }, 5000);
    });
}

//Realizar consultas con Async / Await
function descargarUltimosPedidos() {
    return new Promise ( resolve => {
        console.log('Descargando los pedidos.... espere...');

        setTimeout( () => {
            resolve('Los pedidos ya fueron descargados');
        }, 3000);
    });
}


// setTimeout( ()=> console.log('set timeout...'),5000)


async function app(){
    try {
//        const clientes = await descargarNuevosClientes();
//        const pedidos = await descargarUltimosPedidos();
//        console.log(clientes);
//        console.log(pedidos);

//Como optimizar un llamado de async y await
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
