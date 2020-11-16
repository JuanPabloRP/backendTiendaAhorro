const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get("/perfil", (req, res) => {
  mysqlConnection.query(
    "SELECT Vinculacion, Nombre, Barrio, Direccion FROM `Perfil`  ",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/perfil/:ID_Perfil", (req, res) => {
  const { ID_Perfil } = req.params;
  mysqlConnection.query(
    "DELETE FROM Perfil WHERE ID_Perfil = ?",
    [ID_Perfil],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Perfil eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

router.put("/perfil/:ID_Perfil", (req, res) => {
  const { Nombre, Barrio, Direccion } = req.body;
  const { ID_Perfil } = req.params;
  mysqlConnection.query(
    `UPDATE Perfil SET Perfil.Nombre = ? Perfil.Barrio=? Perfil.Direccion=? WHERE ID_Perfil = ?`,
    [Nombre, Barrio, Direccion, ID_Perfil],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Perfil actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

//////////////////////////  Sin funcionamiento  ///////////////////////////////////
router.post("/login", (req, res) => {
  const { CorreoElectronico, Contraseña } = req.body;
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
//////////////////////////  Sin funcionamiento ///////////////////////////////////

module.exports = router;
