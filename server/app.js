const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongodb = require('./mongoose'); // Import mongoose connection and models

const danceRoutes = require('./dance-routes'); // Import the routes

const app = express();
const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200 
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);


const port = 3000;

app.use('/api', danceRoutes);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.static(path.join(__dirname, 'dist/rld')));
app.get('/rld', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/rld', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
