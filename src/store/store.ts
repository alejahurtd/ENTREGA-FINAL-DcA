const { configureStore } = require('@reduxjs/toolkit');
import postsReducer from './postSlice';

export const store = configureStore({
	reducer: postsReducer,
});
