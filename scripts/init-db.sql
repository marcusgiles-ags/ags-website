-- ============================================================
-- AGS Database Schema — Production Ready
-- Run: node scripts/run-db-init.mjs
-- ============================================================

CREATE DATABASE IF NOT EXISTS ags_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ags_db;

-- ------------------------------------------------------------
-- Table 1: web_inquiries
-- Captures all quote/consultation and guide download requests
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS web_inquiries (
  id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  name          VARCHAR(150)    NOT NULL,
  email         VARCHAR(254)    NOT NULL,
  phone         VARCHAR(30)     DEFAULT NULL,
  nationality   VARCHAR(80)     DEFAULT NULL,
  message       TEXT            DEFAULT NULL,
  source_url    VARCHAR(500)    DEFAULT NULL,
  destination   VARCHAR(100)    DEFAULT NULL,
  group_size    VARCHAR(20)     DEFAULT NULL,
  travel_date   VARCHAR(50)     DEFAULT NULL,
  hotel_tier    VARCHAR(80)     DEFAULT NULL,
  inquiry_type  ENUM('quote','guide','general') NOT NULL DEFAULT 'general',
  privacy_consent   TINYINT(1)  NOT NULL DEFAULT 0,
  marketing_consent TINYINT(1)  NOT NULL DEFAULT 0,
  ip_address    VARCHAR(45)     DEFAULT NULL,
  created_at    DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email (email),
  INDEX idx_created (created_at),
  INDEX idx_type (inquiry_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Table 2: tournament_signups
-- Captures all tournament / events registrations
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS tournament_signups (
  id                INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  name              VARCHAR(150)    NOT NULL,
  email             VARCHAR(254)    NOT NULL,
  handicap          VARCHAR(10)     DEFAULT NULL,
  home_club         VARCHAR(200)    DEFAULT NULL,
  dietary_reqs      VARCHAR(300)    DEFAULT NULL,
  shirt_size        ENUM('XS','S','M','L','XL','XXL','XXXL') DEFAULT NULL,
  privacy_consent   TINYINT(1)      NOT NULL DEFAULT 0,
  marketing_consent TINYINT(1)      NOT NULL DEFAULT 0,
  ip_address        VARCHAR(45)     DEFAULT NULL,
  created_at        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email (email),
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ------------------------------------------------------------
-- Table 3: consent_logs
-- Audit trail for Vietnam Decree 13/2023 compliance
-- Records every consent grant or withdrawal
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS consent_logs (
  id            INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  email         VARCHAR(254)    DEFAULT NULL,
  consent_type  ENUM('analytics','marketing','privacy','all') NOT NULL,
  consent_given TINYINT(1)      NOT NULL DEFAULT 0,
  ip_address    VARCHAR(45)     DEFAULT NULL,
  user_agent    VARCHAR(500)    DEFAULT NULL,
  source_form   VARCHAR(100)    DEFAULT NULL,
  timestamp     DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_email (email),
  INDEX idx_timestamp (timestamp),
  INDEX idx_type (consent_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
