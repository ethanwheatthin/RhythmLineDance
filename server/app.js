const express = require('express');
const mongo = require('./mongoose')
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

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

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', danceRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
