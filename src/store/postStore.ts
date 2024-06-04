const { configureStore } = require('@reduxjs/toolkit');
import postsReducer from './postSlice';

export const postStore = configureStore({
	reducer: postsReducer,
});
