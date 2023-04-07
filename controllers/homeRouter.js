const router = require('express').Router();
const {} = require('../models');
const withAuth  = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname+'../views/index.html'))
    } catch (err) {
        res.status(500).json(err);
    }
})