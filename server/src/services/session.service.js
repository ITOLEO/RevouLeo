/**
 * Session Service
 * Data saat ini disimpan di in-memory store.
 * Ganti semua metode agar memanggil repository layer
 * ketika database sudah terhubung.
 */

// In-memory store — akan diganti DB repository
let sessions = [];

const create = ({ level, durationSeconds }) => {
  const session = {
    id: generateId(),
    level,
    durationSeconds,
    status: 'running',  // running | finished | cancelled
    startedAt: new Date().toISOString(),
    finishedAt: null,
  };
  sessions.push(session);
  return session;
};

const getAll = () => [...sessions];

const getById = (id) => sessions.find((s) => s.id === id) || null;

const update = (id, { status }) => {
  const idx = sessions.findIndex((s) => s.id === id);
  if (idx === -1) return null;

  sessions[idx] = {
    ...sessions[idx],
    status,
    finishedAt: status === 'running' ? null : new Date().toISOString(),
  };
  return sessions[idx];
};

// Simple ID generator (no external dep)
const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

module.exports = { create, getAll, getById, update };
