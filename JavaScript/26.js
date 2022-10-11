//This --- > hace referencia a los elementos dentro del objeto

const reserva = {
    nombre: 'Fede',
    apellido: 'Vargas',
    precio: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y tiene que pagar ${this.precio}`);
    }

};

console.log(reserva);

reserva.informacion();