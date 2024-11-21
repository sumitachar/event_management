import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/userReducer';

const Store= configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;


