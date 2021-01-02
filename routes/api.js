var express = require('express');
var router = express.Router();
const { computeBill } = require('../services/bill');
const { check, validationResult } = require('express-validator');
const bodyValidator = require('../middleware/validator');

router.post('/', bodyValidator, async (req, res) => {
  let { order } = req.body;

  try {
    let payload = await computeBill(order);
    res.send(payload);
  } catch (error) {
    console.error(error);
    if (error.errors) {
      res.status(400).json({ msg: error.errors[0].msg });
    } else {
      res.status(500).json({ msg: 'server error' });
    }
  }
});

module.exports = router;
