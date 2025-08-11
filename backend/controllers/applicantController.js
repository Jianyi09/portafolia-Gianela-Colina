const Applicant = require('../models/Applicant');

// Crear nuevo applicant
const crearApplicant = async (req, res) => {
  try {
    const nuevoApplicant = new Applicant(req.body);
    const applicantGuardado = await nuevoApplicant.save();
    res.status(201).json(applicantGuardado);
  } catch (error) {
    console.error('Error al guardar el applicant:', error.message);
    res.status(400).json({ mensaje: 'No se pudo guardar el formulario' });
  }
};

module.exports = {
  crearApplicant
};
