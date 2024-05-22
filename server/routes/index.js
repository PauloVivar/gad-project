const express = require('express');

const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const addressesRouter = require('./addresses.router');

const publicationsRouter = require('./publications.router');
const categoriesRouter = require('./categories.router');
const tagsRouter = require('./tags.router');
const commentsRouter = require('./comments.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/addresses', addressesRouter);

  router.use('/publications', publicationsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/tags', tagsRouter);
  router.use('/comments', commentsRouter);
}

module.exports = routerApi;
