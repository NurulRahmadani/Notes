const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes_app'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('berhasil terhubung ke database');
});

module.exports = db;
