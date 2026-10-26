const sessionService = require('../services/session.service');

const create = (req, res, next) => {
  try {
    const session = sessionService.create(req.body);
    res.status(201).json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
};

const getAll = (req, res, next) => {
  try {
    const sessions = sessionService.getAll();
    res.json({ success: true, data: sessions });
  } catch (err) {
    next(err);
  }
};

const getById = (req, res, next) => {
  try {
    const session = sessionService.getById(req.params.id);
    if (!session) {
      return res.status(404).json({ success: false, error: 'Session not found' });
    }
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
};

const update = (req, res, next) => {
  try {
    const session = sessionService.update(req.params.id, req.body);
    if (!session) {
      return res.status(404).json({ success: false, error: 'Session not found' });
    }
    res.json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
};

module.exports = { create, getAll, getById, update };
