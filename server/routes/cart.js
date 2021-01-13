const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    console.log("Jestesmy w koszyku");
})

module.exports = router;