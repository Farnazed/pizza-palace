const express = require('express');
const app = express();
const api = require('./routes/api.js');
const compression = require('compression');

app.use(compression());
app.use(express.json());
// app.use('/api', api);

app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server running on port 5000');
});

module.exports = app;
