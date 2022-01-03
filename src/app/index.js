const express = require('express');
const router = express.Router();
const { appPipe } = require('./pipes/app.pipe')

router.get('/iecho', appPipe, (req, res) => {
    const { text } = req.appPipeResult;
    const textReverse = text.split('').reverse().join('');
    const palindrome = text === textReverse ? true : false;

    res.json({ text: textReverse, palindrome });
});

module.exports = router;