const VALID_LEVELS = ['soft', 'medium', 'hard'];

const validateTimerLevel = (req, res, next) => {
  const { level } = req.params;
  if (!VALID_LEVELS.includes(level?.toLowerCase())) {
    return res.status(400).json({
      success: false,
      error: `Level tidak valid. Pilihan: ${VALID_LEVELS.join(', ')}`,
    });
  }
  next();
};

const validateSession = (req, res, next) => {
  const { level, durationSeconds } = req.body;

  if (!level || !VALID_LEVELS.includes(level.toLowerCase())) {
    return res.status(400).json({
      success: false,
      error: `Field 'level' wajib diisi. Pilihan: ${VALID_LEVELS.join(', ')}`,
    });
  }

  if (!durationSeconds || typeof durationSeconds !== 'number' || durationSeconds <= 0) {
    return res.status(400).json({
      success: false,
      error: "Field 'durationSeconds' wajib berupa angka positif",
    });
  }

  next();
};

module.exports = { validateTimerLevel, validateSession };
