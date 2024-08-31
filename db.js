const mysql = require("mysql2");
require("dotenv").config();

// DATBASE POOL
const db = mysql.createConnection({
 host: process.env.RDS_HOSTNAME,
 user: process.env.RDS_USERNAME,
 password: process.env.RDS_PASSWORD,
 database: process.env.RDS_DB_NAME,
 port: process.env.RDS_PORT,
});
db.connect((error) => {
 if (error) throw error;
 console.log("DB connected");
});

module.exports = db;
