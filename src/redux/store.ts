import { configureStore } from '@reduxjs/toolkit';
import podcastReducer from './podcastSlice';
import { podcastsApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(podcastsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
