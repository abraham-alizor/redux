import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import axios from 'axios';
import { getAllPosts } from './actions/postAction';
function App() {
	const dispatch = useDispatch();
	const dtttt = bindActionCreators(getAllPosts, dispatch);
	const state = useSelector((dd) => dd);
	console.log(state);
	useEffect(() => {
		dtttt();
	}, []);
	return (
		<div className='App'>
			<p>HELLO WORLD</p>
		</div>
	);
}

export default App;
