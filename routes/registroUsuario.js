const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");



router.get('/registrados', (req, res) => {     
  mysqlConnection.query('SELECT * FROM Registro ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });




router.post("/registroUsuario", (req, res) => {
  const {CorreoElectronico,Nombre,Contraseña,Vinculacion} = req.body;
  mysqlConnection.query(
    `INSERT INTO Registro(Registro.CorreoElectronico,Registro.Nombre,Registro.Contraseña,Registro.Vinculacion) VALUES (${CorreoElectronico}' , '${Nombre}','${Contraseña}','${Vinculacion});`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Registrado");
      } else {
        console.log(err);
      }
    }
  );
});



module.exports = router;
