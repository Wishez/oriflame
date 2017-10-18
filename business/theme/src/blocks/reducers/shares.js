 import {
 	GET_SHARES,
 	GET_SINGLE_SHARES,
 	CLEAR_SHARES,
 	REQUEST_SHARES
 } from './../constants/sharesTypes.js';

const initSharesState = {
	sharesList: [],
	share: {},
	isSharesGotten: false,
	isRequestingShares: false,
	isShareGotten: false
};


const shares = (
	state = {},
	action
) => {
	switch (action.type) {
		case REQUEST_SHARES:
			return {
				...state,
				isRequestingShares: true,
				isSharesGotten: false
			}
		case GET_SHARES: 
			return {
				...state,
				sharesList: action.data,
				isRequestingShares: false,
				isSharesGotten: true,
				isShareGotten: false
			};
		case GET_SINGLE_SHARES: 
			return {
				...state,
				share: action.data,
				isRequestingShares: false,
				isShareGotten: true,
				isSharesGotten: false
			};
		case CLEAR_SHARES:
			return {
				...state,
				share: {},
				shares: []
			};
		default:
			return state;
	}
};

export default shares;