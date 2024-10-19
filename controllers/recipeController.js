const express = require('express');
const router = express.Router();
const cuisineController = require('./controllers/cuisineController');
const recipeController = require('./controllers/recipeController');
const directionController = require('./controllers/directionController');

router.get('/recipes', recipeController.getAll);
router.post('/recipes', recipeController.create);
router.put('/recipes/:id', recipeController.update);
router.delete('/recipes/:id', recipeController.delete);

module.exports = router;