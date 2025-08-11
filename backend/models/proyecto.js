const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    maxlength: 500
  },
  imagenURL: {
    type: String,
    validate: {
      validator: function (url) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(url);
      },
      message: 'La URL de imagen debe ser válida y terminar en .jpg, .png, .webp, etc.'
    }
  }
}, { timestamps: true });

module.exports = mongoose.model('Proyecto', proyectoSchema);
