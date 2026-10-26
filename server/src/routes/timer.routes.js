const { Router } = require('express');
const timerController = require('../controllers/timer.controller');
const { validateTimerLevel } = require('../middleware/validators');

const router = Router();

// GET  /api/timers         — get all preset timer levels
// GET  /api/timers/:level  — get a specific level config
router.get('/', timerController.getAllLevels);
router.get('/:level', validateTimerLevel, timerController.getLevelByName);

module.exports = router;
