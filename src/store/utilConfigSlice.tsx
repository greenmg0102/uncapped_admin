import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  loadingStatus: false,
};

const initialState = {
  loadingStatus: defaultState.loadingStatus,
};

const utilConfigSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleLoadingStatus(state) {
      state.loadingStatus = !state.loadingStatus;
    },
  },
});

export const {
  toggleLoadingStatus,
} = utilConfigSlice.actions;

export default utilConfigSlice.reducer;
