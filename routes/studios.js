const express = require('express');
const router = express.Router();
const studiosCtrl = require('../controllers/studios');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /studios (display all studios)
router.get('/', studiosCtrl.index);

// router.get('/about', studiosCtrl.about);

// Get /studios/ new
router.get('/new',ensureLoggedIn, studiosCtrl.new);
// router.get('/new, ensureLoggedIn, studiosCtrl.new');

router.get('/about', studiosCtrl.about);

router.post('/',ensureLoggedIn, studiosCtrl.create);

router.get('/contact', studiosCtrl.contact);

router.get('/booking', studiosCtrl.booking);

// GET METHOD /stuios/:id
router.get('/studios/:id', studiosCtrl.show)


router.get('/:id', studiosCtrl.show);

module.exports = router;