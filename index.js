const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const applicantRoutes = require('./backend/routes/applicantRoute');

const app = express();
connectDB(); // Conectar con MongoDB Atlas

app.use(cors());
app.use(express.json());
app.use('/api', applicantRoutes); // Ruta base

// Servir archivos estáticos del frontend
app.use(express.static('frontend'));
app.use('/assets', express.static('frontend/assets'));
app.use('/pages', express.static('frontend/pages'));
app.use('/scripts', express.static('frontend/scripts'));

// Ruta principal para servir la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontend/pages/index.html');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en puerto ${PORT}`);
});
