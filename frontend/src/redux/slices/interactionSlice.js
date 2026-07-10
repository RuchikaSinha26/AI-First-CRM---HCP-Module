import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hcpName: "",
  hospital: "",
  interactionDate: "",
  interactionType: "",
  productsDiscussed: "",
  meetingSummary: "",
  followUp: "",
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,
  reducers: {
    updateInteraction: (state, action) => {
      return { ...state, ...action.payload };
    },

    resetInteraction: () => initialState,
  },
});

export const { updateInteraction, resetInteraction } =
  interactionSlice.actions;

export default interactionSlice.reducer;