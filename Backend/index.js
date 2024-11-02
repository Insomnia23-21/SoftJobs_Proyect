require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const logMiddleware = require('./middlewares/logMiddleware');

const app = express();
app.use(express.json());
app.use(logMiddleware);

// Rutas
app.use('/api', userRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error en el servidor' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
