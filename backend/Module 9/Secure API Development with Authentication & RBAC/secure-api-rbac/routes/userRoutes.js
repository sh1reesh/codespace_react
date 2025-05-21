const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

const router = express.Router();

router.get('/', auth, role(['admin']), getAllUsers);

module.exports = router;
