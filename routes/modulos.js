const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/modulos', (req, res) => {     
  mysqlConnection.query('SELECT * FROM modulos ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  router.put('/modulo/:id', (req, res) => {
    const {modulo,mod} = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE modulos SET modulos.modulo = ?, modulos.mod = ? WHERE id = ?`,[modulo,mod,id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Modulo actualizado'});
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-modulo',(req,res)=>{
  const {modulo,mod}=req.body
  mysqlConnection.query(`INSERT INTO modulos (modulos.id, modulos.modulo, modulos.mod) VALUES (NULL,'${modulo}' , '${mod}');`,(err,rows,fields)=>{
    if(!err){
      res.json('Modulo agregado');
    }
    else{
      console.log(err);
    }
  });
});



router.delete('/modulos/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM modulos WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Modulo eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;