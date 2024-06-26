const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});
