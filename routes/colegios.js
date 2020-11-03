const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

router.get('/colegios', (req, res) => {     
  mysqlConnection.query('SELECT * FROM instituciones_educativas ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

  router.put('/colegio/:id', (req, res) => {
    const {modulo,mod} = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE instituciones_educativas SET instituciones_educativas.modulo = '${modulo}',instituciones_educativas.mod = '${mod}' WHERE id = '${id}'`,(err, rows, fields) => {
      if(!err) {
        res.json({status: 'Colegio actualizado'});
      } else {
        console.log(err);
      }
    });
  });



router.post('/nuevo-colegio',(req,res)=>{
  const {colegioNombre,docente,direction}=req.body
  mysqlConnection.query(`INSERT INTO instituciones_educativas (id, nombre_ie, 
    docente_encargado_mt, pagina_web, direccion, foto_ie, descripcion_ie, 
    telefono_institucional, correo_institucional) VALUES (NULL, '${colegioNombre}', 
    '${docente}', NULL, '${direction}', NULL, NULL, NULL, NULL);`,(err,rows,fields)=>{
    if(!err){
      res.json('Colegio agregado');
    }
    else{
      console.log(err);
    }
  });
});



router.delete('/colegio/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM instituciones_educativas WHERE id = ?',
   [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Modulo eliminado!'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;