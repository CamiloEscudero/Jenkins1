const express = require('express');
const personaRoute = require('./src/persona');

const app = express();
const port = process.env.PORT || 5000;

//Definicion de Middleware
app.use(express.json());

//Rutas
app.use('/persona', personaRoute);

app.get('/', (req, res) => {
  res.send("Hola Mundo");
});

app.listen(port, () => {
  console.log(`Server corriendo en: http://localhost:${port}`);
});
