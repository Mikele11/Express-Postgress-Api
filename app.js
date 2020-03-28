const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();

const customer = require('./routes/customer');
const message = require('./routes/message');

const app = express();
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'hjs');

app.use(function(req, res, next) {  
	res.header('Access-Control-Allow-Headers','*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
}); 

app.get('/', (req, res) => {
	res.status(200).send('<h4>Hello, you in API<h4>');
});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/customer', customer);
app.use('/api/message', message);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	return res.status(404).send({ message: 'Route: ' + req.url + ' Not found.' });
});

// error handler
app.use((err, req, res, next)=> {
	if (err) console.error(err);
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.send('error');
});

module.exports = app;
