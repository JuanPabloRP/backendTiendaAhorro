const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bdqf24om4dmegqjq3zpe-mysql.services.clever-cloud.com',
  user: 'u1qz9y8nnzixk22p',
  password: '4UbN9dvGKDEivhOEtyzZ',
  database: 'bdqf24om4dmegqjq3zpe',
  multipleStatements: true

});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;