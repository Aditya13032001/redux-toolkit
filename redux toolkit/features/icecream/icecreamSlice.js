const createSLice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSLice = createSLice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
});

module.exports;
