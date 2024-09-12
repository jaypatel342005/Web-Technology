const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');
const logger = require('./utils/logger');
const { errors } = require('celebrate');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Load environment variables
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parser middleware
app.use(express.json());

// Swagger documentation
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Management API',
      version: '1.0.0',
      description: 'API for managing products',
    },
    servers: [{ url: 'http://localhost:5000' }],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/products', productRoutes);

// Error handling middleware
app.use(errors()); // Celebrate error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  logger.info(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
