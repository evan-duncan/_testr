require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('handlebars');
const logger = require('./lib/logger');
const defender = require('./lib/defender');
const requestId = require('./lib/requestId');
const customContentType = require('./lib/customContentType');

const log = logger.logger;
const app = express();
const api = require('./api');

app.set('view engine', 'hbs');

app.use(logger.middleware);
app.use(defender);
app.use(requestId);
app.use(customContentType);
app.use(bodyParser.json({ type: customContentType.CONTENT_TYPE }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);

app.listen(process.env.PORT, () => log.info('Express application running on port %d', process.env.PORT));

