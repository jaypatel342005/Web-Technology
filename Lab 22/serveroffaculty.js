// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const facultyRoutes = require('./routes/faculty');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });


  app.use(bodyParser.urlencoded());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Enhanced Faculty API');
});

app.use('/faculty', facultyRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
