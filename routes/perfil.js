const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');
/*
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
*/
router.post('/login',(req,res)=>{
  const {modulo,mod}=req.body
  mysqlConnection.query(`INSERT INTO Registro(modulos.id, modulos.modulo, modulos.mod) VALUES (NULL,'${modulo}' , '${mod}');`,(err,rows,fields)=>{
    if(!err){
      res.json('Modulo agregado');
    }
    else{
      console.log(err);
    }
  });
});



router.delete('/perfil/:id', (req, res) => {
  const { ID_Perfil } = req.params;
  mysqlConnection.query('DELETE FROM Perfil WHERE id = ?',
   [ID_Perfil], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Perfil eliminado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;