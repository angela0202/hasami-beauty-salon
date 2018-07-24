const express = require('express');
const { join } = require('path');
const router = express.Router();

const { models_find, model_save, models_delete, subscrib_save, subscrib_find, subscrib_delete, mailsend} = require('./auth.js');

router.get('/news', models_find);
router.post('/news', model_save);
router.delete('/news', models_delete);

router.get('/news/subscribe', subscrib_find);
router.post('/news/subscribe', subscrib_save);
router.delete('/news/subscribe', subscrib_delete);

router.get('/news/f', mailsend);
module.exports = router;