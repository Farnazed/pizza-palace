const assert = require('assert');
const { builtinModules } = require('module');
const should = require('chai').should();
const { computeBill } = require('../services/bill');
describe('Different order formats', async () => {
  it('should generate correct bill formate', async () => {
    const order = [
      {
        size: 'large',
        basic_topping: ['pepperoni', 'cheese'],
        deluxe_topping: [],
      },
      {
        size: 'large',
        basic_topping: ['pepperoni', 'cheese'],
        deluxe_topping: [],
      },
      {
        size: 'medium',
        basic_topping: [],
        deluxe_topping: ['sausage'],
      },
      {
        size: 'small',
        basic_topping: ['pepperoni', 'cheese'],
        deluxe_topping: [],
      },
      {
        size: 'small',
        basic_topping: ['pepperoni', 'cheese'],
        deluxe_topping: [],
      },
    ];

    const bill = await computeBill(order);
    const DesiredBill = [
      '2 Large, Two Topping Pizza - Cheese And Pepperoni:$36',
      '1 Medium, One Topping Pizza - Sausage:$17',
      '2 Small, Two Topping Pizza - Cheese And Pepperoni:$26',
    ];
    bill.orders.forEach((item) => DesiredBill.should.include(item));
  });
});
