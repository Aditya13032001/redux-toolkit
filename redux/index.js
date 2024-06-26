// Imports
const redux = require("redux");
const createStore = redux.createStore;
//

// Actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function orderCaked() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// Initaial State

const initialState = {
  numOfCakes: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};

// Store Creation
const store = createStore(reducer);
console.log("Inital State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(orderCaked());
store.dispatch(orderCaked());
store.dispatch(orderCaked());
store.dispatch(restockCake(3));

unsubscribe();
