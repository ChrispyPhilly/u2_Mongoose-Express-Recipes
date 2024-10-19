const express = require('express');
const router = express.Router();
const cuisineController = require('./controllers/cuisineController');
const recipeController = require('./controllers/recipeController');
const directionController = require('./controllers/directionController');

router.get('/cuisines', cuisineController.getAll);
router.post('/cuisines', cuisineController.create);
router.put('/cuisines/:id', cuisineController.update);
router.delete('/cuisines/:id', cuisineController.delete);

module.exports = router;