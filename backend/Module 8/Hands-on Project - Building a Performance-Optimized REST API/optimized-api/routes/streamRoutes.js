const express = require('express');
const router = express.Router();
const { streamLargeFile } = require('../controllers/streamController');

router.get('/file', streamLargeFile);

module.exports = router;
