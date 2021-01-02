import { GET_BILL } from '../actions/types';

const initialState = {
  bill: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BILL:
      return { ...state, bill: payload };

    default:
      return state;
  }
}
