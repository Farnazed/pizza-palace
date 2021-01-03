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

  const onSaveClick = () => {
    // if (onValidate()) {
    getBill({
      order: orders,
    });
    //   document.getElementById("close-ideal-candidate-modal").click();
    // }
  };
  const showMenuOnClick = () => {
    setMenuCount([...menuCount, menuCount.length + 1]);
  };

  return (
    <div className="container">
      {menuCount.map((item, index) => (
        <PizzaOptions key={item} />
      ))}
      <div className="mr-2 row mb-2">
        <div className="col-10"></div>
        <div className="col-2">
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
      <div className="mr-2 row">
        <div className="col-10"></div>
        <div className="col-2">
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
      {orderBill ? (
        <div class="card">
          <div class="card-body">
            {orderBill.orders.map((item) => (
              <p>{item} </p>
            ))}
            <p>GST: {orderBill.GST}</p>
            <p>Subtotal: {orderBill.subtotal}</p>
            <p>Total: {orderBill.total}</p>
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
