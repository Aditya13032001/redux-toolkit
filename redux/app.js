// Imports
const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
//

// Actions
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}
// Initaial State

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numofIceCreams: 20,
};

// Reducer

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numofIceCreams: state.numofIceCreams + action.payload,
      };
    default:
      return state;
  }
};

// Store Creation

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Inital State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
const actions = bindActionCreators(
  {
    orderCaked,
    restockCake,
    orderIceCream,
    restockIceCream,
  },
  store.dispatch
);

actions.orderCaked();
actions.orderCaked();
actions.orderCaked();
actions.restockCake(2);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(2);

unsubscribe();
