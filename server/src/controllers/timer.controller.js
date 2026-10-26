const timerService = require('../services/timer.service');

const getAllLevels = (req, res, next) => {
  try {
    const levels = timerService.getAllLevels();
    res.json({ success: true, data: levels });
  } catch (err) {
    next(err);
  }
};

const getLevelByName = (req, res, next) => {
  try {
    const level = timerService.getLevelByName(req.params.level);
    if (!level) {
      return res.status(404).json({ success: false, error: 'Level not found' });
    }
    res.json({ success: true, data: level });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllLevels, getLevelByName };
