const express = require('express');
const app = express();
app.use(express.json());

// Import routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

module.exports = app;
