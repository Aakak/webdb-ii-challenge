const express = require('express');

const knex = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  knex
    .select('*')
    .from('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to get cars from database' });
    });
});



router.post('/', (req, res) => {
  knex('cars')
  .insert(req.body)
    // .into('accounts')
    .then(ids => {
      knex('cars').select('*')
      .where('id', '=', ids[0])
      .then(car => {
        res.status(200).json(car);
      })
      .catch(error => {
        res.status(500).json({ error: 'Failed to get post from database' });
      });
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ error: 'Failed to insert post' });
    });
});


module.exports = router;