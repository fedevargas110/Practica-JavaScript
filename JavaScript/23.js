//Switch sirve cuando se necesita analizar diferentes casos en donde pasa una cosa o la otra y no usar else if

const metodoPago = 'Tarjeta';

switch (metodoPago){
    case 'Tarjeta':
        console.log('TARJETEASTE LA COMPRA');
        break;
    default:
        console.log('Aun no has pagado cabron dj lujaan');
        break;
}