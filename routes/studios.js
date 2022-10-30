const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /studios (display all studios)
router.get('/', studiosCtrl.index);

router.get('/new, ensureLoggedIn, studiosCtrl.new');

module.exports = router;