import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



import {
	tryGetShares,
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

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(tryGetShares());
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
						content='Обновить'
						onClick={() => {
							dispatch(tryGetShares());
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

	return {
		...shares
	};
}

export default withRouter(connect(mapStateToProps)(SharesContainer));