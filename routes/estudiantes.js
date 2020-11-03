const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

router.get("/estudiantes", (req, res) => {
  mysqlConnection.query("SELECT * FROM actores ", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post("/nuevo-estudiante", (req, res) => {
  const {
    nombres,
    apellidos,
    correo,
    documento,
    telefono_celular,
    fecha_nacimiento,
    institucion_id
  } = req.body;
  let alumno = [
    nombres,
    apellidos,
    correo,
    documento,
    telefono_celular,
    fecha_nacimiento,
    institucion_id
  ];

  let nuevoAlumno = `INSERT INTO actores(nombres,apellidos,correo,documento,telefono_celular,fecha_nacimiento,institucion_id)
                  VALUES(?,?,?,?,?,?,?)`;
  mysqlConnection.query(nuevoAlumno, alumno, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Alumno matriculado` });
  });
});

router.put("/estudiante/:id", (req, res) => {
  const {
    nombres,
    apellidos,
    correo,
    documento,
    telefono_celular,
    fecha_nacimiento,
    institucion_id
  } = req.body;
  const { id } = req.params;
  mysqlConnection.query(
    `UPDATE actores SET nombres = ?,apellidos = ?,
  correo = ?,documento = ?,telefono_celular = ?,fecha_nacimiento = ?,
  institucion_id = ? WHERE id = ?`,
    [
      nombres,
      apellidos,
      correo,
      documento,
      telefono_celular,
      fecha_nacimiento,
      institucion_id,
      id
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Estudiante actualizado" });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/estudiante/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "DELETE FROM actores WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "Estudiante eliminado!" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
