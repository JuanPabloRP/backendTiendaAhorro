const express = require('express');
const app = express();
const cors = require("cors");
const registroUsuario= require('./routes/registroUsuario');
const carrito = require('./routes/carrito');
const productos = require('./routes/Productos');
const perfil = require('./routes/perfil');
const historialPedidos = require('./routes/historialPedidos');



app.use(cors({origin: '*'})); 
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

app.use(express.json());



// Routes//
app.use('/api',registroUsuario);
app.use('/api',carrito);
app.use('/api',productos);
app.use('/api',perfil);
app.use('/api',historialPedidos);


let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Corriendo en puerto: ${port}`);
});







app.use('/api',registroUsuario);
app.use('/api',carrito);
app.use('/api',productos);
app.use('/api',perfil);
app.use('/api',historialPedidos);
