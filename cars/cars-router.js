const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/cars endpoint to READ/RETRIEVE cars -
router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving the cars' });
    });
});

// GET /api/cars/:id endpoint to READ/RETRIEVE car by ID -
router.get('/:id', (req, res) => {});

// POST /api/cars endpoint to CREATE a car -
router.post('/', (req, res) => {});

// **********************************************************************

// Custom Middleware

// Validate body on create/update car request - NEEDS TESTING
function validateCar(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Missing car data!' });
  } else if (!req.body.VIN) {
    res.status(400).json({ message: 'Missing required "VIN" field!' });
  } else if (!req.body.make) {
    res.status(400).json({ message: 'Missing required "make" field!' });
  } else if (!req.body.model) {
    res.status(400).json({ message: 'Missing required "model" field!' });
  } else {
    next();
  }
}

// **********************************************************************

module.exports = router;
