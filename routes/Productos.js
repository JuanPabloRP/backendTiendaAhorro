const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/home", (req, res) => {
  mysqlConnection.query("SELECT * FROM Productos ", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/buscarProductos", (req, res) => {
  mysqlConnection.query("SELECT * FROM Productos ", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

/////////////////////////                 ARREGLAR                ////////////////////////////
router.put('/editarProductos/:id', (req, res) => {
  const {Nombre,Precio,Descripcion,Disponibilidad,Cantidad,Imagen} = req.body;
  const { ID_Producto } = req.params;
  mysqlConnection.query(`UPDATE Productos SET Nombre=${Nombre}, Precio=${Precio}, Descripcion= ${Descripcion}, Disponibilidad=${Disponibilidad}, Cantidad${Cantidad}, Imagen=${Imagen} where ID_Producto=${ID_Producto} `,(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Producto actualizado'});
    } else {
      console.log(err);
    }
  });
});
/////////////////////////                 ARREGLAR                ////////////////////////////


module.exports = router;
