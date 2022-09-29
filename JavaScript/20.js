// Metodos de Propiedad

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo la cancion numero: ${id} en tu lista`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    creandoPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproduciendoPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Borrando la cancion: ${id} de tu lista`)
}



reproductor.reproducir(12);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.creandoPlaylist('ReggetOld');
reproductor.reproduciendoPlaylist('ReggetOld');
