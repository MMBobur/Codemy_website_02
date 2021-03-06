const initialState = {
  counter: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'burgerCounter':
      return { ...state, counter: state.counter + 1 };
    case 'DECREASE':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counter;
