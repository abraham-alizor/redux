import axios from 'axios';
import { GET_POSTS, GET_POSTS_ERR } from './types';

export function getAllPosts() {
	return (dispatch) => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				return dispatch({
					type: GET_POSTS,
					payload: res.data,
				});
			})
			.catch((err) => {
				return dispatch({
					type: GET_POSTS_ERR,
					payload: true,
					// payload: err?.response?.error,
				});
			});
	};
}
