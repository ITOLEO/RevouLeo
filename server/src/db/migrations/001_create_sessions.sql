-- Migration: 001_create_sessions
-- Jalankan file ini ketika database sudah terhubung

CREATE TABLE IF NOT EXISTS timer_sessions (
  id            VARCHAR(20)   PRIMARY KEY,
  level         VARCHAR(10)   NOT NULL CHECK (level IN ('soft', 'medium', 'hard')),
  duration_seconds INT        NOT NULL,
  status        VARCHAR(20)   NOT NULL DEFAULT 'running'
                              CHECK (status IN ('running', 'finished', 'cancelled')),
  started_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  finished_at   TIMESTAMPTZ
);
