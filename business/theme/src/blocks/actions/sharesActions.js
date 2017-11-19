 import {
 	GET_SHARES,
 	GET_SINGLE_SHARES,
 	CLEAR_SHARES,
 	REQUEST_SHARES
} from './../constants/sharesTypes.js';
import {
	REQUEST_VIDEOS
} from './../constants/actionTypes.js';

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
};
export const tryGetVideos = (context) => dispatch => {
	console.log('in');
	return fetch('/getMe/v0/videos/')
		.then(resp => resp.json())
		.then(data => {
			dispatch({
				type: REQUEST_VIDEOS,
				videos: data,
				context: context
			});
		})
		.catch(err => { 
			console.log(err);
		});
}
