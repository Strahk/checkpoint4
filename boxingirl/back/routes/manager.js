const express = require('express');

const connection = require('../conf');

const router = express.Router();

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO Manager SET ?', formData, err => {
    if (err) {
      res.status(500).send("Echec de la sauvegarde des informations du Manager");
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/', (req, res) => {
  const query = 'SELECT * FROM Manager';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Echec lors de l'affichage de tous les Managers");
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM Manager WHERE id_manager = ?';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Echec lors de l'affichage de tous les Managers");
    } else {
      res.json(results);
    }
  });
});

router.put('/:id', (req, res) => {
  const id_manager = req.params.id;
  const { name } = req.body;
  connection.query(
    'UPDATE Manager SET ? WHERE id_manager = ?',
    [name, id_manager],
    err => {
      if (err) {
        res.status(500).send("Erreur lors de la mise à jour des informations");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  const id_manager = req.params.id;
  connection.query('DELETE FROM Manager WHERE id_manager = ?', [id_manager], err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression de ce Manager");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;