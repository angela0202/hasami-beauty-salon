const express = require('express');
const {join} = require('path');
const exampleRouter = express.Router();

let Controller = require('../controllers/index.js')
const filename = join(process.cwd(), 'controllers', 'registeredcustomer.json');
const contact = join(process.cwd(), 'controllers', 'contact.json');
const countUp = join(process.cwd(), 'controllers', 'countUp.json');

let c = new Controller();

exampleRouter.get('/', (req, res) => {
    res.send('example route');
});

exampleRouter.get('/config', (req, res) => {
    res.sendFile(filename, (err) => {
        if (err) {
            res.send(err)
        }
    })
});

exampleRouter.get('/countUp', (req, res) => {
  res.sendFile(countUp, (err) => {
    if (err) {
      res.send(err)
    }
  })
});

exampleRouter.post('/contact', (req, res) => {
  c.readerWriter(req.body, contact)
});

exampleRouter.post('/a', (req, res) => {
  c.readerWriter(req.body, contact)
});

exports.exampleRouter = exampleRouter;