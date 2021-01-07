import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getBill } from '../../actions/bill.js';
import PizzaOptions from './PizzaOptions';
const Home = ({ getBill, orderBill: { bill, orders } }) => {
  useEffect(() => {
    // Update the document title using the browser API
    setOrderBill(bill);
  }, [bill]);

  const [orderBill, setOrderBill] = useState('');
  const [menuCount, setMenuCount] = useState([]);
  const sizingOptions = [
    { id: 'small', value: 'Small' },
    { id: 'medium', value: 'Medium' },
    { id: 'large', value: 'Large' },
  ];
  const toppingOptions = [
    { id: 'cheese', value: 'Cheese' },
    { id: 'ham', value: 'Ham' },
    { id: 'pepperoni', value: 'pepperoni' },
  ];
  const deluxeToppingOptions = [
    { id: 'sausage', value: 'Sausage' },
    { id: 'feta cheese', value: 'Feta Cheese' },
    { id: 'tomatoes', value: 'Tomatoes' },
    { id: 'olives', value: 'Olives' },
  ];
  const onSaveClick = () => {
    getBill({
      order: orders,
    });
  };
  const saveOrder = () => {
    var text = document.getElementById('txtArea');
    let orderInput = text.value;
    let orderItems = orderInput.split(/\r?\n/);
    let ordersToSend = [];
    orderItems = orderItems.forEach((element) => {
      let toppings = element
        .split('-')
        .map(function (a) {
          return a.trim();
        })[1]
        .toLowerCase()
        .split(',')
        .map(function (a) {
          return a.trim();
        })
        .filter((item) => item !== '');

      let size = element
        .split('-')
        .map((a) => {
          return a.trim();
        })[0]
        .toLowerCase();
      let basic_topping = toppings.filter((item) =>
        toppingOptions.some((element) => element['id'] === item)
      );
      console.log(basic_topping);
      let deluxe_topping = toppings.filter(
        (item) => toppingOptions[item] !== undefined
      );
      let rawOrder = {
        size,
        basic_topping,
        deluxe_topping,
      };

      ordersToSend.push(rawOrder);
    });
    console.log(ordersToSend);
    getBill({
      order: ordersToSend,
    });
  };

  const showMenuOnClick = () => {
    setMenuCount([...menuCount, menuCount.length + 1]);
  };

  return (
    <div className="container">
      {menuCount.map((item, index) => (
        <PizzaOptions
          key={item}
          deluxeToppingOptions={deluxeToppingOptions}
          toppingOptions={toppingOptions}
          sizingOptions={sizingOptions}
        />
      ))}
      <div className="mr-2 row mb-2">
        <div className="col-lg-10 col-sm-12 col-md-1 col-xs-12"></div>
        <div className="col-lg-2 col-sm-12 col-md-12 col-xs-1">
          <button
            type="submit"
            style={{ width: '100%' }}
            className="btn btn-danger text-center"
            onClick={showMenuOnClick}
          >
            Add Pizza
          </button>
        </div>
      </div>

      <div className="mr-2 row mb-2">
        <div className="col-lg-10 col-sm-12 col-md-1 col-xs-12"></div>
        <div className="col-lg-2 col-sm-12 col-md-1 col-xs-12">
          {orders.length !== 0 && (
            <button
              type="submit"
              style={{ width: '100%' }}
              className="btn btn-info text-center"
              onClick={onSaveClick}
            >
              Checkout
            </button>
          )}
        </div>
      </div>

      <div>
        OR enter order
        <div class="input-group" id="textOrder">
          <span class="input-group-text">Order:</span>
          <textarea
            class="form-control"
            id="txtArea"
            aria-label="With textarea"
          ></textarea>
          <button
            class="btn btn-outline-danger"
            type="button"
            id="button-addon2"
            onClick={saveOrder}
          >
            Checkout
          </button>
        </div>
      </div>
      {orderBill ? (
        <div class="card">
          <div class="card-body">
            {orderBill.orders.map((item) => (
              <p>{item} </p>
            ))}
            <p>GST: ${orderBill.GST}</p>
            <p>Subtotal: ${orderBill.subtotal}</p>
            <p>Total: ${orderBill.total}</p>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderBill: state.order,
});

export default connect(mapStateToProps, { getBill })(Home);
