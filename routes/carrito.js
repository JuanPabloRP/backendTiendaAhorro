const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/carrito', (req, res) => {     
  mysqlConnection.query('SELECT * FROM Carrito', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


router.delete('/eliminarCarrito/:id', (req, res) => {
  const {ID_Carrito} = req.params;
  mysqlConnection.query('DELETE FROM Carrito WHERE ID_Carrito =  ?',
   [ID_Carrito], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Producto del carrito ha sido eliminado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;