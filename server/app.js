const express = require('express');
const mongo = require('./mongoose')
const danceRoutes = require('./dance-routes'); // Import the routes

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', danceRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
