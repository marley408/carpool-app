const router = require("express").Router();

router.get('/carpools', (req, res, next) => res.json({ ok: true }));
router.post('/carpools', async (req, res, next) => {
  // create new instance of by doing 
  // i.e. const carpool = await Carpool.create({ destination: req.destination });
  // send back data like if it was successful
  // ex: res.json({  }) / res.send('ok')
});

module.exports = router;