const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '', // adresse du serveur
  user: '', // le nom d'utilisateur
  password: '', // le mdp
  database: '' // le nom de la bdd
});

module.exports = connection;