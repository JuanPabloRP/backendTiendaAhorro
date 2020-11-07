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
 let {buscaProd}=req.query
  mysqlConnection.query(`SELECT * FROM Productos WHERE Productos LIKE '${buscaProd}%'`, (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


/////////////////////////             HECHO PERO PRESENTA FALLO          ////////////////////////////
router.put("/editarProductos/:ID_Producto", (req, res) => {
  const {Nombre,Precio,Descripcion,Disponibilidad,Cantidad,Imagen} = req.body;
  const {ID_Producto} = req.params;
  mysqlConnection.query(
    `UPDATE Productos SET Nombre='${Nombre}',Productos.Precio='${Precio}',Productos.Descripcion= '${Descripcion}',Productos.Disponibilidad='${Disponibilidad}',Productos.Cantidad'${Cantidad}',Productos.Imagen='${Imagen}' where ID_Producto=${ID_Producto}`,
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Producto actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});
/////////////////////////             HECHO PERO PRESENTA FALLO          ////////////////////////////

module.exports = router;