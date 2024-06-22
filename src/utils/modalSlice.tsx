import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./appStore";

// Define a type for the slice state
interface Modal {
  open: boolean;
}

// Define the initial state using that type
const initialState: Modal = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const searchText = (state: RootState) => state.search.value;

export default modalSlice.reducer;
