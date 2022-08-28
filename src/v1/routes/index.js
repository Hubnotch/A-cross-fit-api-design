const express = require('express')
const router = express.Router()


router.route('/').get((req, res) => {
    res.send(`<h1>Welcome</h1> from ${req.baseUrl}`)
})


module.exports = router