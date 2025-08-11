const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const applicantRoutes = require('./backend/routes/applicantRoute');

const app = express();
connectDB(); // Conectar con MongoDB Atlas

app.use(cors());
app.use(express.json());
app.use('/api', applicantRoutes); // Ruta base

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en puerto ${PORT}`);
});
