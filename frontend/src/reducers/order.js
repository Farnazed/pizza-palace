import { GET_BILL, ADD_ORDER } from '../actions/types';

const initialState = {
  bill: null,
  orders: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BILL:
      return { ...state, bill: payload };
    case ADD_ORDER:
      return { ...state, orders: [...state.orders, payload] };
    default:
      return state;
  }
}
