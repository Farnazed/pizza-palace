module.exports = function (req, res, next) {
  let correctFormate = true;
  const orders = req.body.order;
  for (const item of orders) {
    if (
      typeof item.size === 'undefined' ||
      typeof item.basic_topping === 'undefined' ||
      typeof item.deluxe_topping === 'undefined'
    ) {
      correctFormate = false;
    }
  }
  if (!correctFormate) {
    res.status(403).json({ msg: 'Invalid JSON Object' });
  } else next();
};
