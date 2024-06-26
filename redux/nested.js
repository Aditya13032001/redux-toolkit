const redux = require("redux");
const produce = require("immer").produce;

// initial
const initialState = {
  name: " ",
  address: { street: " ", city: " ", state: " " },
};

const ADDRESS_STATE = "ADDRESS_STATE";
const NAME_STATE = "NAME_STATE";
const CITY_STATE = "CITY_STATE";
const DISTRICT_STATE = "DISTRICT_STATE";

const updateAddress = (street) => {
  return { type: ADDRESS_STATE, payload: street };
};

const updateName = (name) => {
  return { type: NAME_STATE, payload: name };
};

const updateCity = (city) => {
  return { type: CITY_STATE, payload: city };
};
const upoateDistrict = (district) => {
  return { type: DISTRICT_STATE, payload: district };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_STATE:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    case NAME_STATE:
      return produce(state, (draft) => {
        draft.name = action.payload;
      });
    case DISTRICT_STATE:
      return produce(state, (draft) => {
        draft.address.state = action.payload;
      });
    case CITY_STATE:
      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(updateName("Aditya"));
store.dispatch(updateCity("Pune"));
store.dispatch(updateAddress("145/146"));
store.dispatch(upoateDistrict("Maha"));

unsubscribe();
