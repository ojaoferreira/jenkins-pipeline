const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Pipeline with Jenkins - by João Ferreira');
});

app.listen('3000', () => console.log('Server is runner on port 3000'));