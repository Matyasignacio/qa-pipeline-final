const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo - Evaluacion QA');
});

// Exportamos app para poder testearla sin levantar el servidor dos veces
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App corriendo en puerto ${port}`);
  });
}

module.exports = app;
