const express = require('express');

const connection = require('../conf');

const router = express.Router();

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO Club SET ?', formData, err => {
    console.log('test ', err)
    if (err) {
      res.status(500).send("Echec de la sauvegarde des informations du club");
    } else {
      res.sendStatus(201);
    }
  });
});

router.get('/', (req, res) => {
  const query = 'SELECT * FROM Club';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'affichage des clubs");
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM Club WHERE id_club = ?';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'affichage des clubs");
    } else {
      res.json(results);
    }
  });
});

router.put('/:id', (req, res) => {
  const id_club = req.params.id;
  const formData = req.body;
  connection.query(
    'UPDATE Club SET ? WHERE id_club = ?',
    [formData, id_club],
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
  const id_club = req.params.id;
  connection.query('DELETE FROM Club WHERE id_club = ?', [id_club], err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression de ce club");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;