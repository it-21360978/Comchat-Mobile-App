import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import messageReducer from './messageSlice';
import { Provider } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { Provider };
