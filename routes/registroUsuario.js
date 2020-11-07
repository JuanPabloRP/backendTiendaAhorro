const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");


router.post("/registroUsuario", (req, res) => {
  const {CorreoElectronico,Nombre,Contraseña,Vinculacion} = req.body;
  mysqlConnection.query(
    `INSERT INTO Registro(Registro.CorreoElectronico,Registro.Nombre,Registro.Contraseña,Registro.Vinculacion) VALUES ('${CorreoElectronico}' , '${Nombre}','${Contraseña}','${Vinculacion}');`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Registrado");
      } else {
        console.log(err);
      }
    }
  );
});


router.delete('/eliminarRegistro/:ID_Usuario', (req, res) => {
  const {ID_Usuario} = req.params;
  mysqlConnection.query('DELETE FROM Registro WHERE ID_Usuario = ?',
   [ID_Usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Perfil eliminado!'});
    } else {
      console.log(err);
    }
  });
});



module.exports = router;
