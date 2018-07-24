const express = require('express');
const apiRouter = express.Router();
const {exampleRouter} = require('./example.router');

apiRouter.use('/example', exampleRouter);

apiRouter.use((req, res) => {
    res.status(404).end();
});

exports.apiRouter = apiRouter;