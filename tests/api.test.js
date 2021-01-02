process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../app.js');

chai.use(chaiHttp);

describe('compute bills for different input types', (done) => {
  it('it should send back a bill', (done) => {
    const DesiredBill = [
      '2 Large, Two Topping Pizza - Cheese And Pepperoni:$36',
      '1 Medium, One Topping Pizza - Sausage:$17',
      '2 Small, Two Topping Pizza - Cheese And Pepperoni:$26',
    ];
    chai
      .request(server)
      .post('/api/')
      .set('content-type', 'application/json')
      .send({
        order: [
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
        ],
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.orders.forEach((item) => DesiredBill.should.include(item));
        done();
      });
  });
});
