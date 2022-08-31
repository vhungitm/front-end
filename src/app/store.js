import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './adminSlice';
import { authReducer } from './authSlice';

const rootReducer = {
	auth: authReducer,
	admin: adminReducer
};

const store = configureStore({
	reducer: rootReducer
});

export default store;
