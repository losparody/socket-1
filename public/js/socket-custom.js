
        var socket = io();

        // metodo ON es para escuchar el servidor
        socket.on('connect',function(){
            console.log('Conectado al server');
        });

        socket.on('disconnect', function() {    
            console.log('Desconectado del servidor');
        });

        socket.on('enviarMensaje', function(mensaje) {
            console.log(mensaje);
        })

        // metodo EMIT es para enviar info al sersver
        socket.emit('enviarMensaje', {
            usuario: 'Luispa',
            message: 'Hola mundo'
        }, function(response) {
            console.log('Respuesta server: ',response);
        });
   
