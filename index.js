const express = require('express');

const app = express()
const port = 4444

app.get('/', (req, res) => {
    res.json({ message: "Ini JSON" });
})

// POST method
app.post('/', (req, res) => {
    res.send('Ini POST')
})

// PUT method
app.put('/estea', (req, res) => {
    res.send('Aku suka ice tea')
})

// DELETE method
app.delete('/estea', (req, res) => {
    res.send('Delete kang')
});
