const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../db/db');

//////////////////////////  No funciona ///////////////////////////////////
router.post("/login", (req, res) => {
  const {CorreoElectronico,Contraseña} = req.body;
  mysqlConnection.query(
    `INSERT INTO Registro(Registro.CorreoElectronico,Registro.Contraseña) VALUES ('${CorreoElectronico}','${Contraseña}');`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Has ingresado sesión");
      } else {
        console.log(err);
      }
    }
  );
});
//////////////////////////  No funciona ///////////////////////////////////



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

module.exports = router;