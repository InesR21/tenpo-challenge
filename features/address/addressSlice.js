import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    userAddress: null,
  },
  reducers: {
    setAddress: (state, action) => {
      state.userAddress = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export const selectAddress = (state) => state.address.userAddress;

export default addressSlice.reducer;
