const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');
// const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /studios (display all studios)
router.get('/', studiosCtrl.index);

// router.get('/about', studiosCtrl.about);

// Get /studios/ new
router.get('/new', studiosCtrl.new);
// router.get('/new, ensureLoggedIn, studiosCtrl.new');

router.get('/about', studiosCtrl.about);

router.post('/', studiosCtrl.create);

module.exports = router;