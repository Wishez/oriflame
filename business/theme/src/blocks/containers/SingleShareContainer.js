import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react'


import {
	tryGetSingleSharesIfNeeded,
	clearShares
 } from './../actions/sharesActions.js';
import SingleShare from './../components/SingleShare';

class SingleShareContainer extends Component {
	static PropTypes = {
		isShareGotten: PropTypes.bool.isRequired,
		share: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired,
		match: PropTypes.object.isRequired
	}

	getShare = () => {
		const { dispatch, isShareGotten } = this.props;
		const { shareId } = this.props.match.params;
		
		dispatch(tryGetSingleSharesIfNeeded(shareId, isShareGotten));
	}

	componentDidMount() {
		this.getShare();
    }

    componentDidUpdate() {
	
    }

	render() {
		const { isShareGotten, dispatch } = this.props;

		return (
			<main className='main'>
				{ isShareGotten ?
						<SingleShare {...this.props} /> :
						<Loader active inline='centered' content='Загрузка' size='large' />
				}
			</main>
		);
	}
}

const mapStateToProps = state => {
	const { app } = state;
	const { share, isShareGotten } = app;
	
	return {
		share,
		isShareGotten
	};
}

export default withRouter(connect(mapStateToProps)(SingleShareContainer));