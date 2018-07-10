const initialState = {
  balance: 0
};

const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

export function deposit(num) {
  return {
    type: DEPOSIT,
    payload: num
  };
}

export function withdraw(num) {
  return {
    type: WITHDRAW,
    payload: num
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload
      };
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload
      };
    default:
      return state;
  }
}
