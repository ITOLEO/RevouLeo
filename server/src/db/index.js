/**
 * Database connection placeholder.
 * Ganti konten file ini ketika database siap diintegrasikan.
 *
 * Contoh dengan PostgreSQL + pg:
 *
 *   const { Pool } = require('pg');
 *   const pool = new Pool({
 *     host: process.env.DB_HOST,
 *     port: process.env.DB_PORT,
 *     database: process.env.DB_NAME,
 *     user: process.env.DB_USER,
 *     password: process.env.DB_PASS,
 *   });
 *   module.exports = pool;
 */

const db = {
  connected: false,
  query: async () => {
    throw new Error('Database belum terhubung. Konfigurasi DB di server/src/db/index.js');
  },
};

module.exports = db;
