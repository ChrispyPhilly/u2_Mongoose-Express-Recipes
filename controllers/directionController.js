const express = require('express');
const router = express.Router();
const cuisineController = require('./controllers/cuisineController');
const recipeController = require('./controllers/recipeController');
const directionController = require('./controllers/directionController');

router.get('/directions', directionController.getAll);
router.post('/directions', directionController.create);
router.put('/directions/:id', directionController.update);
router.delete('/directions/:id', directionController.delete);

module.exports = router;