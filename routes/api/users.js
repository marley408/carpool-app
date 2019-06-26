const router = require("express").Router();

router.get('/users', (req, res, next) => res.send('it works from users'));

module.exports = router;