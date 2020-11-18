const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");


router.get('/historialPedidos/:ID_HistorialP', (req, res) => {  
  const {ID_HistorialP} = req.params;   
  mysqlConnection.query("SELECT * FROM HistorialPedidos WHERE ID_HistorialP=?",[ID_HistorialP],
  (err, rows, fields) => {
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
});


module.exports = router;

