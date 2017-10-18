import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



import {
	tryGetSharesIfNeeded,
	clearShares
 } from './../actions/sharesActions.js';
import ShareList from './../components/SharesList';
import Section from './../components/Section';
import { Button } from 'semantic-ui-react';

class SharesContainer extends Component {
	static PropTypes = {
		isSharesGotten: PropTypes.bool.isRequired,
		isRequestingShares: PropTypes.bool.isRequired,
		sharesList: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired
	}
	getShares = () => {
		const { dispatch, isSharesGotten } = this.props;
		dispatch(tryGetSharesIfNeeded(isSharesGotten));
	}

	componentDidMount() {
		this.getShares();
    }

    componentDidUpdate() {

    }

	render() {
		const { 
			dispatch,
			isRequestingShares, 
			sharesList,
			isSharesGotten
		} = this.props;

		return (
			<main className='main'>
				<Section block='shares'>
					<Button loading={isRequestingShares}
						aria-pressed='false'
						content='Обновить'
						className='defaultButton shares__button'
						onClick={() => {
							dispatch(tryGetSharesIfNeeded(false));
						}} 
					/>
					{isSharesGotten ?
						<ShareList shares={sharesList} /> :
						''
					}
				</Section>
			</main>
		);
	}
}

const mapStateToProps = state => {
	const { shares } = state;
	console.log(shares);
	return {
		...shares
	};
}

export default withRouter(connect(mapStateToProps)(SharesContainer));