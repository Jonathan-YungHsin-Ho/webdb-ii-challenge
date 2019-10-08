const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// **********************************************************************

// CRUD Endpoints

// GET /api/cars endpoint to READ/RETRIEVE cars -

// GET /api/cars/:id endpoint to READ/RETRIEVE car by ID -

// POST /api/cars endpoint to CREATE a car -

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
