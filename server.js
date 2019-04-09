const express = require('express');
const path = require('path');
const app = module.exports = express();

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3000);
console.log('Running on http://localhost:' + 3000);
