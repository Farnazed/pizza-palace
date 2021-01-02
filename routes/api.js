var express = require('express');
var router = express.Router();
const { computeBill } = require('../services/bill');

router.get('/', async (req, res) => {
  let { order } = req.body;
  if (order.length == 0) {
    res.status(400).json({ msg: 'no order received' });
  } else {
    try {
      let payload = await computeBill(order);
      res.send(payload);
    } catch (error) {
      res.json({ msg: 'server error' });
    }
  }
});

module.exports = router;
