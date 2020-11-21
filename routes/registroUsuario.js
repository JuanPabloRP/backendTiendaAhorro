const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");


router.post("/registroUsuario", (req, res) => {
  const {CorreoElectronico,Nombre,Contraseña} = req.body;
  mysqlConnection.query(
    `INSERT INTO Registro(Registro.CorreoElectronico,Registro.Nombre,Registro.Contraseña) VALUES ('${CorreoElectronico}' , '${Nombre}','${Contraseña}');`,
    (err, rows, fields) => {
      if (!err) {
        res.json("Registrado");
      } else {
        console.log(err);
      }
    }
  );
});


router.post('/login',(req,res)=>{
  const {CorreoElectronico,Contraseña}=req.body;
  console.log(CorreoElectronico,Contraseña)
  mysqlConnection.query(`SELECT * FROM Registro WHERE CorreoElectronico='${CorreoElectronico}' AND contraseña='${Contraseña}'`,(err,rows,fields)=>{
    if (err) {
      res.json({ message:`Error`});
      return console.log(err.message);
    }
    if(rows.length>0){
      res.json({ message:`Bienvenido`});
    }
    else{
      res.json({ message:`Correo electronico o contraseña errada, por favor verifique la información ingresada` });
    }
  });
});

router.delete('/eliminarRegistro/:ID_Usuario', (req, res) => {
  const {ID_Usuario} = req.params;
  mysqlConnection.query('DELETE FROM Registro WHERE ID_Usuario = ?',
   [ID_Usuario], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'El perfil ha sido eliminado!'});
    } else {
      console.log(err);
    }
  });
});



module.exports = router;
