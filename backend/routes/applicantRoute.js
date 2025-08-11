const express = require('express');
const router = express.Router();
const {
  crearApplicant
} = require('../controllers/applicantController');

// POST: recibe los datos del formulario
router.post('/applicants', crearApplicant);

module.exports = router;
