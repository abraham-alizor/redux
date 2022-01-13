import { GET_POSTS, GET_POSTS_ERR } from '../actions/types';

const initialState = {
	err: null,
	posts: null,
	isLoading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				isLoading: false,
			};
		case GET_POSTS_ERR:
			return {
				...state,
				posts: action.payload,
				isLoading: false,
			};

		default:
			return {
				...state,
			};
	}
}
