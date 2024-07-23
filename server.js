// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.post('/email', (req, res) => {
  const email = req.body.email;
  if (email) {
    // Обработка логики подписки
    res.status(200).json({ message: 'Subscribed successfully' });
  } else {
    res.status(400).json({ message: 'Email is required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
