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
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM Carrito WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Productos del carrito han sido eliminados!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;