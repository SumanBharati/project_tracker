import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./appStore";

// Define a type for the slice state
interface NewUser {
  isNewUser: boolean;
}

// Define the initial state using that type
const initialState: NewUser = {
    isNewUser: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
  },
});

export const { setIsNewUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const searchText = (state: RootState) => state.search.value;

export default userSlice.reducer;
