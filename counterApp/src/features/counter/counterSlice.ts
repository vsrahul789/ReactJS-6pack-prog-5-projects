import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented: (state) => {
      state.value++;
    },
    // Increment by value
    amountIncrement: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // decrement
    decrement: (state) => {
      state.value--;
    },
    // reset
  },
});

export const { incremented, amountIncrement, decrement } = counterSlice.actions;
export default counterSlice.reducer;
