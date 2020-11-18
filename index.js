const express = require('express');
const app = express();
const registroUsuario= require('./routes/registroUsuario');
const carrito = require('./routes/carrito');
const productos = require('./routes/Productos');
const perfil = require('./routes/perfil');
const historialPedidos = require('./routes/historialPedidos');




// Ajustes
app.set('port',3001);

// Middlewares
app.use(express.json());

// Routes//

app.use('/api',registroUsuario);
app.use('/api',carrito);
app.use('/api',productos);
app.use('/api',perfil);
app.use('/api',historialPedidos)

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});




