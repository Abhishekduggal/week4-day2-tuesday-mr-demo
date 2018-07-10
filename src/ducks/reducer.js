const initialState = {
  balance: 0
};

const DEPOSIT = "DEPOSIT";

export function deposit(num) {
  return {
    type: DEPOSIT,
    payload: num
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        balance: state.balance + action.payload
      };
    default:
      return state;
  }
}
