import { GET_BILL } from './types';

export const getBill = (order) => async (dispatch) => {
  try {
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    };

    const response = await fetch(`/api`, requestOption);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_BILL, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
