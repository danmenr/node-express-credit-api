const express = require('express');
const router = express.Router();

// @route GET api/credits/test
// @desc Test credits route
// @access Public
router.get('/test',(req, res) => {
    res.json({msg: "credits works"})
});

module.exports = router;