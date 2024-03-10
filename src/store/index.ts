import { authSliceReducer, headerSliceReducer, orderSliceReducer } from '@/features';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    header: headerSliceReducer,
    user: authSliceReducer,
    order: orderSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
