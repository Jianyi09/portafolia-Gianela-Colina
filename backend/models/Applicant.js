// models/Applicant.js
const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    nombre:{ type: String, required: true },
    email: { type: String, required: true },
    habilidades: { type: String, required: true },
    experiencia: { type: String, required: true },
    mensaje: String,
    fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Applicant', applicantSchema);
