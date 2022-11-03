const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST method/ /studios/:id/reviews 
router.post('/studios/:id/reviews', ensureLoggedIn,reviewsCtrl.create);

// PUT method/ /reviews/:id
router.put('/reviews/:id', ensureLoggedIn, reviewsCtrl.update);

// GET method /reviews/:id/edit
router.get('/reviews/:id/edit', ensureLoggedIn, reviewsCtrl.edit);

// DELETE method /reviews/:id/edit
router.delete('/reviews/:id', ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;

