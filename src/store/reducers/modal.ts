import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    handleModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleModal } = modalSlice.actions;

export default modalSlice.reducer;
