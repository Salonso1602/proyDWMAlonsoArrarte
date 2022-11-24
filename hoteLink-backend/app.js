if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const init = require('./init');
const activityRoutes = require('./routes/activityRoutes');
const authRoutes = require('./routes/authRoutes');
const customersRoutes = require('./routes/customersRoutes');
const eventRoutes = require('./routes/eventRoutes');
const hotelRoutes = require('./routes/activityRoutes');
const imagesRoutes = require('./routes/imagesRoutes');
const newsRoutes = require('./routes/newsRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const servicesRoutes = require('./routes/servicesRoutes');

const app = express();

app.use(init.setResponseAllowanceHeaders);

app.use(helmet());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

const v1 = {
  activityRoutes: 'activities',
  authRoutes: 'auth',
  customersRoutes: 'customers',
  eventRoutes: 'event',
  hotelRoutes: 'hotels',
  imagesRoutes: 'images',
  newsRoutes: 'news',
  restaurantRoutes: 'restaurant',
  servicesRoutes: 'services',
}
Object.entries(v1).forEach(([key, value]) => {
  v1[key] = `/api/v1/${value}`;
});

app.use(v1.activityRoutes, activityRoutes);
app.use(v1.authRoutes, authRoutes);
app.use(v1.customersRoutes, customersRoutes);
app.use(v1.eventRoutes, eventRoutes);
app.use(v1.hotelRoutes, hotelRoutes);
app.use(v1.imagesRoutes, imagesRoutes);
app.use(v1.newsRoutes, newsRoutes);
app.use(v1.restaurantRoutes, restaurantRoutes);
app.use(v1.servicesRoutes, servicesRoutes);

module.exports = app;