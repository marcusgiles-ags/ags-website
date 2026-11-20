import mysql from 'mysql2/promise';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const connection = await mysql.createConnection({
  host:     process.env.DB_HOST     || 'localhost',
  port:     Number(process.env.DB_PORT) || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '',
  multipleStatements: true,
});

const sql = fs.readFileSync(path.join(__dirname, 'init-db.sql'), 'utf8');

try {
  await connection.query(sql);
  console.log('✅ AGS database schema initialized successfully.');
} catch (err) {
  console.error('❌ DB init failed:', err);
  process.exit(1);
} finally {
  await connection.end();
}
