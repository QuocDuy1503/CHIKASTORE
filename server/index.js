//CLI: npm install express body-parser--save
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 1503;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Middlewares
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// APIs
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
