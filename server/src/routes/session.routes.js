const { Router } = require('express');
const sessionController = require('../controllers/session.controller');
const { validateSession } = require('../middleware/validators');

const router = Router();

// POST /api/sessions        — log a new timer session (start)
// GET  /api/sessions        — get all recorded sessions
// GET  /api/sessions/:id    — get a single session
// PATCH /api/sessions/:id   — mark session as finished / cancelled

router.post('/', validateSession, sessionController.create);
router.get('/', sessionController.getAll);
router.get('/:id', sessionController.getById);
router.patch('/:id', sessionController.update);

module.exports = router;
