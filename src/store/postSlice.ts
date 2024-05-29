import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Post {
	usuario: string;
	image: string;
	description: string;
}

export interface Twet {
	autor: string;
	contenido: string;
}

interface InitialDataState {
	posts: Post[];
	twets: Twet[];
}

const initialState: InitialDataState = {
	posts: [],
	twets: [],
};

const postsSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setPosts(state, action: PayloadAction<Post[]>) {
			return {
				...state,
				posts: action.payload,
			};
		},
		setTwets(state, action: PayloadAction<Twet[]>) {
			return {
				...state,
				twets: action.payload,
			};
		},
	},
});

export const { setPosts, setTwets } = postsSlice.actions;
export default postsSlice.reducer;
