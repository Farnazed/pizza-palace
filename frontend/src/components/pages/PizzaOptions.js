import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/bill.js';

const PizzaOptions = ({ addOrder }) => {
  const [size, setSize] = useState('small');
  const [basicTopping, setBasicTopping] = useState([]);
  const [deluxeTopping, setDeluxeTopping] = useState([]);

  const sizeChange = (e) => {
    const { value } = e.target;
    setSize(value);
  };

  const basicToppingChange = (e) => {
    setBasicTopping([...basicTopping, e.target.value]);
  };

  const deluxeToppingChange = (e) =>
    setDeluxeTopping([...deluxeTopping, e.target.value]);
  const sizingOptions = [
    { id: 'small', value: 'Small' },
    { id: 'medium', value: 'Medium' },
    { id: 'large', value: 'Large' },
  ];
  const toppingOptions = [
    { id: 'cheese', value: 'Cheese' },
    { id: 'ham', value: 'Ham' },
    { id: 'peperoni', value: 'peperoni' },
  ];
  const deluxeToppingOptions = [
    { id: 'sausage', value: 'Sausage' },
    { id: 'feta cheese', value: 'Feta Cheese' },
    { id: 'tomatoes', value: 'Tomatoes' },
    { id: 'olives', value: 'Olives' },
  ];
  const onSaveClick = () => {
    // if (onValidate()) {
    addOrder({
      size,
      basic_topping: basicTopping,
      deluxe_topping: deluxeTopping,
    });

    //   document.getElementById("close-ideal-candidate-modal").click();
    // }
  };
  return (
    <div className="shadow-sm card p-2 mb-5 ">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <h5>Pizza Size:</h5>
          <select
            className="form-select"
            onChange={sizeChange}
            aria-label="Default select example"
          >
            {sizingOptions.map((item) => (
              <option value={item.id}> {item.value}</option>
            ))}
          </select>
        </div>
        <div className="px-5 col-md-3 col-sm-12">
          <h5 className="text-left">Basic Toppings: </h5>
          <ul className="text-left list-group list-group-flush">
            {toppingOptions.map((item) => (
              <li className="list-group-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.id}
                  id={item.id}
                  onChange={basicToppingChange}
                />
                <label className="form-check-label" for={item.id}>
                  {item.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 col-md-3 col-sm-12 ">
          <h5 className="text-left">Deluxe Toppings:</h5>
          <ul className="text-left list-group list-group-flush">
            {deluxeToppingOptions.map((item) => (
              <li className="list-group-item">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item.id}
                  id={item.id}
                  onChange={deluxeToppingChange}
                />

                <label className="form-check-label" for={item.id}>
                  {item.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3 col-sm-12 ">
          <div className="p-2">
            {' '}
            <p>Price: $13</p>
          </div>
          <div className="p-2">
            <button
              type="submit"
              style={{ position: 'absolute', bottom: '0px' }}
              className="mt-2 btn btn-success"
              onClick={onSaveClick}
            >
              Save Item
            </button>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <button
            type="submit"
            style={{ width: '100%' }}
            className="mt-2 btn btn-success"
            onClick={onSaveClick}
          >
            Save Item
          </button>
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderBill: state.order,
});

export default connect(mapStateToProps, { addOrder })(PizzaOptions);

/**<p>Select Pizza Size:</p>
      {sizingOptions.map((item) => (
        <div>
          <input
            className="form-check-input"
            type="radio"
            value={item.id}
            id={item.id}
            onChange={sizeChange}
          />
          <label className="form-check-label" for="cheese">
            {item.value}
          </label>
        </div>
      ))}
      <p>Select Basic Toppings: </p>
      {toppingOptions.map((item) => (
        <div>
          <input
            className="form-check-input"
            type="radio"
            value={item.id}
            id={item.id}
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="cheese">
            {item.value}
          </label>
        </div>
      ))}

      <p>Select Deluxe Toppings: </p>
      {deluxeToppingOptions.map((item) => (
        <div>
          <input
            className="form-check-input"
            type="radio"
            value={item.id}
            id={item.id}
            onChange={deluxeToppingChange}
          />
          <label className="form-check-label" for="cheese">
            {item.value}
          </label>
        </div>
      ))} */
