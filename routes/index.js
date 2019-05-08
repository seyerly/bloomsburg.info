const express = require('express');
const router = express.Router();
path = require('path')

var path = path.join(__dirname, '../views/');

router.get('/', (req, res) => {
    res.sendFile(path + "index.html");
});

router.get('/economy', (req, res) => {
    res.sendFile(path + "economy.html")
});

module.exports = router;
