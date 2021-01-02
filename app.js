const express = require('express');
const app = express();
const api = require('./routes/api.js');

app.use(express.json());
// app.use('/api', api);

app.use('/api', api);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port 3000');
});

module.exports = app;
