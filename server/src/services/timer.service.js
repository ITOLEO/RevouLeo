/**
 * Timer Service
 * Data saat ini disimpan di memory (in-memory).
 * Ganti getAllLevels / getLevelByName agar memanggil repository
 * ketika database sudah terhubung.
 */

const TIMER_LEVELS = [
  { level: 'soft',   label: 'Soft',   durationSeconds: 180,  description: 'Kuning masih cair, putih sudah matang' },
  { level: 'medium', label: 'Medium', durationSeconds: 360,  description: 'Kuning setengah matang, creamy' },
  { level: 'hard',   label: 'Hard',   durationSeconds: 600,  description: 'Kuning dan putih matang sempurna' },
];

const getAllLevels = () => TIMER_LEVELS;

const getLevelByName = (level) =>
  TIMER_LEVELS.find((t) => t.level === level.toLowerCase()) || null;

module.exports = { getAllLevels, getLevelByName };
