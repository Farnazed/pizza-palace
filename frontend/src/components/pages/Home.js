import React, { useState, useEffect } from 'react';
import { getBill } from '../../actions/bill';
const Home = () => {
  const [size, setSize] = useState('');
  const [basicTopping, setBasicTopping] = useState([]);
  const [deluxeTopping, setDeluxeTopping] = useState([]);

  const sizeChange = (e) => {
    const { value } = e.target;
    setSize(value);
  };

  const basicToppingChange = (e) => {
    console.log(e.target.value);
    setBasicTopping([...basicTopping, e.target.value]);
  };

  const deluxeToppingChange = (e) =>
    setDeluxeTopping([...deluxeTopping, e.target.value]);

  const onSaveClick = () => {
    // if (onValidate()) {
    getBill([
      { size, basic_topping: basicTopping, deluxe_topping: deluxeTopping },
    ]);
    //   document.getElementById("close-ideal-candidate-modal").click();
    // }
  };
  const toppingOptions = [
    { id: 1, value: 'Cheese' },
    { id: 2, value: 'Hame' },
    { id: 3, value: 'Peperoni' },
  ];
  return (
    <div>
      <div>
        <p>Select Pizza Size: </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="small"
            onChange={sizeChange}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Small
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="medium"
            onChange={sizeChange}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Medium
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="large"
            onChange={sizeChange}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Large
          </label>
        </div>
      </div>
      <div>
        <p>Select Basic Toppings: </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="cheese"
            id="cheese"
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="cheese">
            Cheese
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="pepperoni"
            id="pepperoni"
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="pepperoni">
            Pepperoni
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="ham"
            id="ham"
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="ham">
            Ham
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="pineapple"
            id="pineapple"
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="pineapple">
            Pineapple
          </label>
        </div>
      </div>
      <div>
        <p>Select Deluxe Toppings: </p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="sausage"
            id="Sausage"
            onChange={deluxeToppingChange}
          />
          <label className="form-check-label" for="Sausage">
            Sausage
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="feta Cheese"
            id="Feta Cheese"
            onChange={deluxeToppingChange}
          />
          <label className="form-check-label" for="Feta Cheese">
            Feta Cheese
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="tomatoes"
            id="Tomatoes"
            onChange={basicToppingChange}
          />
          <label className="form-check-label" for="Tomatoes">
            Tomatoes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="olives"
            id="Olives"
            onChange={deluxeToppingChange}
          />
          <label className="form-check-label" for="Olives">
            Olives
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-outline-teal"
        onClick={onSaveClick}
      >
        Save
      </button>
    </div>
  );
};

export default Home;
