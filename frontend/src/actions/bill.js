import { GET_BILL, ADD_ORDER } from './types';

export const addOrder = (order) => async (dispatch) => {
  console.log('order is ', order);
  dispatch({ type: ADD_ORDER, payload: order });
};
export const getBill = (order) => async (dispatch) => {
  try {
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };

    const response = await fetch(`api`, requestOption);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch({ type: GET_BILL, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
