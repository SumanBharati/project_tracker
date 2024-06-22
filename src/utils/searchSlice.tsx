import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./appStore";

// Define a type for the slice state
interface SearchText {
  searchText: string;
}

// Define the initial state using that type
const initialState: SearchText = {
  searchText: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const searchText = (state: RootState) => state.search.value;

export default searchSlice.reducer;
