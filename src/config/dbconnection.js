const mysql = require('mysql'); 
 module.exports = () => {
    const DB_HOST = process.env. DB_HOST || 'localhost';
    const DB_USER = process.env.DB_USER || 'root';
    const DB_PASSWORD= process.env.DB_PASSWORD || '123456789';
    const DB_NAME = process.env.DB_NAME || 'usuarios';
    const DB_PORT = process.env.DB_PORT || 3306;
    return mysql.createConnection({
        user: DB_USER,
        password : DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME
    });
} 
/* import { createPool } from 'mysql2/promise';
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
    } from './conf.js';

export const pool = createPool({
        user: DB_USER,
        password : DB_PASSWORD,
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME
}); */



/* host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'usuarios'
 */