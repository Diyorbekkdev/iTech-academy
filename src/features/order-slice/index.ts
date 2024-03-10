import { createSlice } from '@reduxjs/toolkit';

interface IDataState {
  data: any;
}

const initialState: IDataState = {
  data: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setOrder } = orderSlice.actions;
export default orderSlice.reducer;
