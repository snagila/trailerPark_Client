import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedOnallresults: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setClickedOnallresults: (state, action) => {
      state.clickedOnallresults = action.payload;
    },
  },
});
const { reducer: movieReducer, actions } = movieSlice;
export const { setClickedOnallresults } = actions;
export default movieReducer;
