// app.js - new file at top level
const express = require('express')
const app = express()
const port = 3050

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json')


// map all routes to the express app

const calculatorRoutes = require('./routes/calculatorRoutes');

app.use('/calculator', calculatorRoutes);
// export the app
module.exports = app;


app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument)
);