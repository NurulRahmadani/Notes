const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/notes', (req, res) => {
    const { title, date, content } = req.body;
    const sql = 'INSERT INTO notes (title, date, content) VALUES (?, ?, ?)';
    db.query(sql, [title, date, content], (err, result) => {
        if (err) throw err;
        res.send('Note ditambahkan...');
    });
});

// Tampilkan semua notes
router.get('/notes', (req, res) => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Tampilkan salah satu note
router.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM notes WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

router.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, date, content } = req.body;
    const sql = 'UPDATE notes SET title = ?, date = ?, content = ? WHERE id = ?';
    db.query(sql, [title, date, content, id], (err, result) => {
        if (err) throw err;
        res.send('Note diubah...');
    });
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM notes WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send('Note dihapus...');
    });
});

module.exports = router;
