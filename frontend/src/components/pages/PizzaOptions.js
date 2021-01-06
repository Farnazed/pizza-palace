import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../../actions/bill.js';

import PizzaItem from './pizzaItem';
const PizzaOptions = ({
  addOrder,
  sizingOptions,
  toppingOptions,
  deluxeToppingOptions,
}) => {
  const [size, setSize] = useState('small');
  const [basicTopping, setBasicTopping] = useState([]);
  const [deluxeTopping, setDeluxeTopping] = useState([]);
  console.log(size);
  const sizeChange = (e) => {
    const { value } = e.target;
    setSize(value);
  };

  const basicToppingChange = (e) => {
    if (basicTopping.includes(e.target.value)) {
      setBasicTopping(basicTopping.filter((item) => item !== e.target.value));
    } else {
      setBasicTopping([...basicTopping, e.target.value]);
    }
  };

  const deluxeToppingChange = (e) => {
    if (deluxeTopping.includes(e.target.value)) {
      setDeluxeTopping(deluxeTopping.filter((item) => item !== e.target.value));
    } else {
      setDeluxeTopping([...deluxeTopping, e.target.value]);
    }
  };

  const deluxePrice = { small: 2.0, medium: 3.0, large: 4.0 };
  const basicPrice = { small: 0.5, medium: 0.75, large: 1 };
  const sizePrice = { small: 12, medium: 14, large: 16 };
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
        <PizzaItem
          price={sizePrice[size]}
          option={[size]}
          onClick={(e) => sizeChange(e)}
          toppingName={'Pizza Size'}
          multiSelect={false}
          toppingOptions={sizingOptions}
        />
        <PizzaItem
          price={basicPrice[size]}
          option={basicTopping}
          onClick={(e) => basicToppingChange(e)}
          toppingName={'Basic Toppings'}
          multiSelect={true}
          toppingOptions={toppingOptions}
        />
        <PizzaItem
          price={deluxePrice[size]}
          option={deluxeTopping}
          onClick={(e) => deluxeToppingChange(e)}
          multiSelect={true}
          toppingName={'Deluxe Toppings'}
          toppingOptions={deluxeToppingOptions}
        />
      </div>
      <div className="row justify-content-center">
        <button
          type="submit"
          className="mt-2 btn btn-success px-5 mx-5 "
          onClick={onSaveClick}
        >
          Save Item
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orderBill: state.order,
});

export default connect(mapStateToProps, { addOrder })(PizzaOptions);
