const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");


router.get("/Productos", (req, res) => {
  mysqlConnection.query("SELECT * FROM Productos ", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


router.get("/buscarProductos", (req, res) => {
  let {buscaProd}=req.query
   mysqlConnection.query(`SELECT * FROM Productos WHERE Nombre LIKE `%buscaProd%` `, (err, rows, fields) => {
     if (!err) {
       res.json(rows);
     } else {
       console.log(err);
     }
   });
 });


router.post("/productoNuevo", (req, res) => {
  const {Nombre,Precio,Descripcion,Disponibilidad,Cantidad,Imagen} = req.body;
  mysqlConnection.query(
    `INSERT INTO Productos(Productos.Nombre,Productos.Precio,Productos.Descripcion,Productos.Disponibilidad,Productos.Cantidad,Productos.Imagen) VALUES ('${Nombre}','${Precio}','${Descripcion}','${Disponibilidad}', '${Cantidad}','${Imagen}');`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Producto nuevo agregado");
      } else {
        console.log(err);
      }
    }
  );
});


router.delete('/eliminarProducto/:ID_Producto', (req, res) => {
  const {ID_Producto} = req.params;
  mysqlConnection.query(`DELETE FROM Productos WHERE ID_Producto = ?`,
   [ID_Producto], (err, rows, fields) => {
    if(!err) {
      res.json({status: '¡Producto  eliminado!'});
    } else {
      console.log(err);
    } 
  });
});



router.put('/editarProductos/:ID_Producto', (req, res) => {
  const {Nombre,Precio,Descripcion,Disponibilidad,Cantidad,Imagen} = req.body;
  const { ID_Producto } = req.params;
  mysqlConnection.query(`UPDATE Productos SET Nombre=?,Productos.Precio=?,Productos.Descripcion= ?,Productos.Disponibilidad=?,Productos.Cantidad=?,Productos.Imagen=? where ID_Producto=?`, 
  [Nombre,Precio,Descripcion,Disponibilidad,Cantidad,Imagen, ID_Producto], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Producto actualizado'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;



