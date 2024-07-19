const express = require('express');
const http = require('http');

const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

require('dotenv').config();
let env = process.env.NODE_ENV || 'local'
console.log(`Your environment is set to ${env}`);

const mongodb = require('./mongoose');
const danceRoutes = require('./dance-routes'); 
const emailRoute = require('./emailer');

const app = express();
const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200 
};


app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
// Trust the first proxy in the chain (Heroku)
app.set('trust proxy', 1);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs,
  handler: (req, res) => {
    console.log(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).send('Too Many Requests');
  },
});
app.use(limiter);


const port = process.env.PORT || 3000;

app.use('/api', danceRoutes);
app.use('/api', emailRoute)
app.get('/', (req, res) => {
  // res.send('Hello, World!');
  res.sendFile(path.join(__dirname, 'dist/rld', 'index.html'));
});



app.use(express.static(path.join(__dirname, 'dist/rld')));
// app.get('/rld', (req, res) => {
//   console.log("🚀", path.join(__dirname, 'dist/rld', 'index.html'))
//   res.sendFile(path.join(__dirname, 'dist/rld', 'index.html'));
// });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
