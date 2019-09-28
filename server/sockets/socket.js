const { io } = require('../server');

io.on('connection' , (client) => {
    
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Bienvenido a socket Server'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    //escuchar el cliente
    client.on('enviarMensaje',(data, callback) => {
        
        console.log(data);

        client.broadcast.emit(data);

      /*   if (mensaje.usuario) {
            callback({
                mensaje: 'Todo ok con el usuario ' + mensaje.usuario
            });
        } else {
            callback({
                mensaje: 'Todo mal con el usuario' 
            });
        }; */
    });
});

