// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware básico
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Hola mi king, tu app está corriendo en Render 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
