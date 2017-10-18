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

const tryGetShares = () => dispatch => {
	dispatch(sharesRequesting());
	console.log('request s')
	return fetch('/getMe/v0/shares/')
		.then(resp => resp.json())
		.then(data => {
			dispatch(getShares(data));
		})
		.catch((err) => {
			console.log(err);
		});
};

const tryGetSingleShare = id => dispatch => {
	dispatch(sharesRequesting());
	console.log('request')
	return fetch(`/getMe/v0/shares/${id}/`)
		.then(resp => resp.json())
		.then(data => {
			dispatch(getSingleShare(data));
		})
		.catch(err => {
			console.log(err);
		});
};

export const tryGetSharesIfNeeded = isSharesGotten => dispatch => {
	if (!isSharesGotten) dispatch(tryGetShares());
};

export const tryGetSingleSharesIfNeeded = (id, isShareGotten) => dispatch => {
	if (!isShareGotten) dispatch(tryGetSingleShare(id));
}
