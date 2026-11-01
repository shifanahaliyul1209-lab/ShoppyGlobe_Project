import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { term: "" },
  reducers: {
    setSearchTerm(state, action) {
      state.term = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

// Selector
export const selectSearchTerm = (state) => state.search.term;

export default searchSlice.reducer;