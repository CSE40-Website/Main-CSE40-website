import mysql from 'mysql2';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,         
    user: process.env.DB_USER, 
    port: process.env.DB_PORT,        
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,  
    connectTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const db = pool.promise();