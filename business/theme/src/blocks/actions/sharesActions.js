 import {
 	GET_SHARES,
 	GET_SINGLE_SHARES,
 	CLEAR_SHARES,
 	REQUEST_SHARES
 } from './../constants/sharesTypes.js';


export const clearShares = () => ({
	type: CLEAR_SHARES
});

const getShares = shares => ({
	type: GET_SHARES,
	data: shares
});

const getSingleShare = share => ({
	type: GET_SINGLE_SHARES,
	data: share
});

const sharesRequesting = () => ({
	type: REQUEST_SHARES
});

export const tryGetShares = () => dispatch => {
	dispatch(sharesRequesting());

	return fetch('/api/v0/shares/')
		.then(resp => resp.json())
		.then(data => {
			dispatch(getShares(data));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const tryGetSingleShare = id => dispatch => {
	dispatch(sharesRequesting());

	return fetch(`/api/v0/shares/${id}/`)
		.then(resp => resp.json())
		.then(data => {
			dispatch(getShare(data[0]));
		})
		.catch((err) => {
			console.log(err);
		});
};

