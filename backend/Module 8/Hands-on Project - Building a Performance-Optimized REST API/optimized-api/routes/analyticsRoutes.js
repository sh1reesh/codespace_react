const express = require('express');
const router = express.Router();
const { getAggregatedData } = require('../controllers/analyticsController');

router.get('/aggregate', getAggregatedData);

module.exports = router;
