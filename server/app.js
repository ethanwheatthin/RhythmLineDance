const express = require('express');
const mongo = require('./mongoose')
const cors = require('cors');

const danceRoutes = require('./dance-routes'); // Import the routes

const app = express();
const corsOptions = {
  origin: '*', // Replace with your allowed origin(s)
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', danceRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
